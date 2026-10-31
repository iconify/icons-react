import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s0fitmm0c.css';
import '../../css/a/aq7fl7bzm.css';
import '../../css/r/rk2r9-bbi.css';
import '../../css/q/qtdkd5bib.css';
import '../../css/y/ynnjdrb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s0fitmm0c wm-shadow"/><path class="aq7fl7bzm wm-shadow"/><path class="rk2r9-bbi"/><path class="qtdkd5bib"/><path class="ynnjdrb9c"/></g>`,
		"fallback": "withicons-brutal:wand-sparkles",
	});
}

export default Component;
