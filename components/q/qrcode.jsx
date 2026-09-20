import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbyvh60wm.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/d/da976vbvv.css';
import '../../css/f/fjfvtrkwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGczrnudJR" class="jbyvh60wm"/></defs><g class="ft5dv1b6b"><use href="#SVGczrnudJR"/><g class="av3m8fbrw"><use href="#SVGczrnudJR"/><path class="da976vbvv"/></g><path class="fjfvtrkwl"/></g>`,
		"fallback": "tdesign:qrcode",
	});
}

export default Component;
