import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gh1_hobdv.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/szpavsbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gh1_hobdv wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="szpavsbah"/></g>`,
		"fallback": "withicons:mithai-box-blueprint",
	});
}

export default Component;
