import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z03v2kzni.css';
import '../../css/f/fr8plouco.css';
import '../../css/j/japcojbes.css';
import '../../css/r/rcgahzqlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z03v2kzni"/><path class="fr8plouco wm-shadow"/><path class="japcojbes"/><path class="rcgahzqlr"/></g>`,
		"fallback": "withicons-brutal:skip-back",
	});
}

export default Component;
