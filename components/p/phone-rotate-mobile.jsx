import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sog6aobne.css';
import '../../css/o/o8vpynb-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sog6aobne"/><path class="o8vpynb-d"/></g>`,
		"fallback": "streamline-flex:phone-rotate-mobile",
	});
}

export default Component;
