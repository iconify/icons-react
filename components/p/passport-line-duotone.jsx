import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rap11obza.css';
import '../../css/a/ax3lz4b9z.css';
import '../../css/g/ga7t0girt.css';
import '../../css/e/ef0vyen_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rap11obza"/><circle class="ax3lz4b9z"/><path class="ga7t0girt"/><path class="ef0vyen_w"/></g>`,
		"fallback": "solar:passport-line-duotone",
	});
}

export default Component;
