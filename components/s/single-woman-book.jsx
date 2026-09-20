import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mqu1w7ben.css';
import '../../css/n/n3t34zbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mqu1w7ben"/><path class="n3t34zbfp"/></g>`,
		"fallback": "streamline-ultimate:single-woman-book",
	});
}

export default Component;
