import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-ipkgb1f.css';
import '../../css/r/r-zsl_btv.css';
import '../../css/b/bevhxabeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-ipkgb1f"/><path class="r-zsl_btv"/><path class="bevhxabeh"/></g>`,
		"fallback": "iconoir:music-note-plus-solid",
	});
}

export default Component;
