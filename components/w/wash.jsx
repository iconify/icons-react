import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n7p_n-oun.css';
import '../../css/i/ia4nbqjlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n7p_n-oun"/><path class="ia4nbqjlp"/></g>`,
		"fallback": "iconoir:wash",
	});
}

export default Component;
