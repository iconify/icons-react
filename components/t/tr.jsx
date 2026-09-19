import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s45eg_h4c.css';
import '../../css/f/fs7_gbffp.css';
import '../../css/n/nlky_nbog.css';
import '../../css/a/a3suuj9no.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s45eg_h4c"/><circle class="fs7_gbffp"/><circle class="nlky_nbog"/><path class="a3suuj9no"/></g>`,
		"fallback": "cif:tr",
	});
}

export default Component;
