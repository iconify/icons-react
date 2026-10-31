import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fnfctw6un.css';
import '../../css/u/uugk94daf.css';
import '../../css/q/q90ibrbvw.css';
import '../../css/w/wa_l-6bwp.css';
import '../../css/g/g1j1je9rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fnfctw6un wm-shadow"/><path class="uugk94daf wm-shadow"/><path class="q90ibrbvw"/><path class="wa_l-6bwp"/><path class="g1j1je9rj"/></g>`,
		"fallback": "withicons-brutal:thermometer",
	});
}

export default Component;
