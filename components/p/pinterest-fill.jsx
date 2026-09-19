import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhj_8ubzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGN18ileSR" class="py7ktqbvf"/></defs><g class="ft5dv1b6b"><g clip-path="url(#SVG3qA7XbCf)"><g clip-path="url(#SVG3qA7XbCf)"><path class="fhj_8ubzq"/></g></g><defs><clipPath id="SVG3qA7XbCf"><use href="#SVGN18ileSR"/></clipPath></defs></g>`,
		"fallback": "akar-icons:pinterest-fill",
	});
}

export default Component;
