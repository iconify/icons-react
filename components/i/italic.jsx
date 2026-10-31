import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cj4esnb7u.css';
import '../../css/o/oqbhsmeju.css';
import '../../css/k/kl_my01pc.css';
import '../../css/o/opz2mkl7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cj4esnb7u wm-shadow"/><path class="oqbhsmeju wm-shadow"/><path class="kl_my01pc"/><path class="opz2mkl7a"/></g>`,
		"fallback": "withicons-brutal:italic",
	});
}

export default Component;
