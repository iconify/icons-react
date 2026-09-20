import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h42y1hklo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whdusle5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGxKSufc7L" class="h42y1hklo"/></defs><g class="ft5dv1b6b"><use href="#SVGxKSufc7L"/><use href="#SVGxKSufc7L"/><use href="#SVGxKSufc7L"/><path class="whdusle5c"/></g>`,
		"fallback": "tdesign:microphone",
	});
}

export default Component;
