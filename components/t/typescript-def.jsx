import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uypib39ja.css';
import '../../css/w/wi6k_ebtv.css';
import '../../css/f/f8daxeblb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uypib39ja"><path class="wi6k_ebtv"/><path class="f8daxeblb"/></g>`,
		"fallback": "material-icon-theme:typescript-def",
	});
}

export default Component;
