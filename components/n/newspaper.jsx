import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m677l9psf.css';
import '../../css/q/q42tyyoet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m677l9psf"/><rect class="q42tyyoet"/></g>`,
		"fallback": "lucide:newspaper",
	});
}

export default Component;
