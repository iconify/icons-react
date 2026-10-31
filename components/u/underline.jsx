import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rhmwxgbpg.css';
import '../../css/e/edf_seb3y.css';
import '../../css/m/mjqmuz-2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rhmwxgbpg wm-shadow"/><path class="edf_seb3y wm-shadow"/><path class="mjqmuz-2n"/></g>`,
		"fallback": "withicons-brutal:underline",
	});
}

export default Component;
