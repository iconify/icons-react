import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/abbsfc5xb.css';
import '../../css/o/o_cci6bmz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><filter id="SVG0piCLRbV"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g class="bi12bsetm"><circle class="abbsfc5xb"/><g filter="url(#SVG0piCLRbV)"><path class="o_cci6bmz"/></g></g>`,
		"fallback": "cryptocurrency-color:mana",
	});
}

export default Component;
