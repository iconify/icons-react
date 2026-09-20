import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we8ybbqij.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/c/cb1jno2qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGz9eH7cdF" class="we8ybbqij"/></defs><g class="ft5dv1b6b"><use href="#SVGz9eH7cdF"/><g class="p_3zmsvya"><use href="#SVGz9eH7cdF"/><path class="cb1jno2qa"/></g></g>`,
		"fallback": "tdesign:server",
	});
}

export default Component;
