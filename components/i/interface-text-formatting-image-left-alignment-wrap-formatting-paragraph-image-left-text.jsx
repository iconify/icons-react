import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f13yzsbqx.css';
import '../../css/p/p37e-xzbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f13yzsbqx"/><rect class="p37e-xzbw"/></g>`,
		"fallback": "streamline:interface-text-formatting-image-left-alignment-wrap-formatting-paragraph-image-left-text",
	});
}

export default Component;
