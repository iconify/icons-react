import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nnkxxtb7a.css';
import '../../css/o/osswuu2kx.css';
import '../../css/x/x0bukmbry.css';
import '../../css/v/vlwxcxbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nnkxxtb7a wm-shadow"/><path class="osswuu2kx wm-shadow"/><path class="x0bukmbry"/><path class="vlwxcxbia"/></g>`,
		"fallback": "withicons-brutal:love-lock",
	});
}

export default Component;
