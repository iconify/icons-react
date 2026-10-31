import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e_tbnbb2b.css';
import '../../css/v/vidj0ab8f.css';
import '../../css/x/xhfks0bnu.css';
import '../../css/i/iv_au28xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e_tbnbb2b wm-shadow"/><path class="vidj0ab8f wm-shadow"/><path class="xhfks0bnu"/><path class="iv_au28xx"/></g>`,
		"fallback": "withicons-brutal:sigma",
	});
}

export default Component;
