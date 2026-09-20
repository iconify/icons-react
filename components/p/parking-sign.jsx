import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pvrzkpe3w.css';
import '../../css/h/hao4uteqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pvrzkpe3w"/><path class="hao4uteqv"/></g>`,
		"fallback": "streamline:parking-sign",
	});
}

export default Component;
