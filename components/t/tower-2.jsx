import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cht72sbxm.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGviYHfcjm" class="cht72sbxm"/></defs><g class="ft5dv1b6b"><use href="#SVGviYHfcjm"/><use href="#SVGviYHfcjm" class="av3m8fbrw"/></g>`,
		"fallback": "tdesign:tower-2",
	});
}

export default Component;
