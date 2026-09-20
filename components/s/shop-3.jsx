import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdscwbbge.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/m/moyuhzd7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG71az5b1L" class="sdscwbbge"/></defs><g class="ft5dv1b6b"><path class="ocos3pbek"/><use href="#SVG71az5b1L"/><use href="#SVG71az5b1L" class="av3m8fbrw"/><path class="moyuhzd7x"/></g>`,
		"fallback": "tdesign:shop-3",
	});
}

export default Component;
