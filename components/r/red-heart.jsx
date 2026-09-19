import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iync2tbfi.css';
import '../../css/m/mygm3kb3e.css';
import '../../css/v/voqtyp18f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iync2tbfi"/><path class="mygm3kb3e"/><ellipse transform="rotate(30 23.477 12.594)" class="voqtyp18f"/></g>`,
		"fallback": "fluent-emoji-flat:red-heart",
	});
}

export default Component;
