import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e-7mzjb9p.css';
import '../../css/u/u40kb3buv.css';
import '../../css/i/itw7vib_f.css';
import '../../css/l/la_zwccio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e-7mzjb9p wm-shadow"/><path class="u40kb3buv wm-shadow"/><path class="itw7vib_f"/><path class="la_zwccio"/></g>`,
		"fallback": "withicons-brutal:more-vertical",
	});
}

export default Component;
