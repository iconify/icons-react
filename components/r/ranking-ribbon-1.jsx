import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p_oj-1bqn.css';
import '../../css/a/areanobkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p_oj-1bqn"/><path class="areanobkl"/></g>`,
		"fallback": "streamline-ultimate:ranking-ribbon-1",
	});
}

export default Component;
