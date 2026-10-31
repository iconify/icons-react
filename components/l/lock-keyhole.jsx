import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cj5vslb_x.css';
import '../../css/i/iu7n2nbwr.css';
import '../../css/b/b86buo32x.css';
import '../../css/e/e_u7zo-5y.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="cj5vslb_x"/><path class="iu7n2nbwr wm-shine"/><path class="b86buo32x wm-k"/><path class="e_u7zo-5y wm-a"/><path class="ugzrm7bka wm-deco"/></g>`,
		"fallback": "withicons-kawaii:lock-keyhole",
	});
}

export default Component;
