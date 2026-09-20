import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a92jmtvlz.css';
import '../../css/q/qhuh-r65d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a92jmtvlz"/><rect transform="rotate(-90 7 11.5)" class="qhuh-r65d"/></g>`,
		"fallback": "streamline:interface-text-formatting-image-bottom-insert-paragraph-bottom-image-text-align-formatting",
	});
}

export default Component;
