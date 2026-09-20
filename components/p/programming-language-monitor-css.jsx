import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jqir14brt.css';
import '../../css/n/n_0ywprtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jqir14brt"/><path class="n_0ywprtl"/></g>`,
		"fallback": "streamline-ultimate:programming-language-monitor-css",
	});
}

export default Component;
