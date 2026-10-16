import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk4-mybus.css';
import '../../css/z/z8weybb_z.css';
import '../../css/u/ued82tf9g.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path clip-rule="evenodd" class="tk4-mybus"/><path clip-rule="evenodd" class="z8weybb_z"/><path class="ued82tf9g"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:teable-light",
	});
}

export default Component;
