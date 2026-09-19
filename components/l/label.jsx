import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wda5zip_i.css';
import '../../css/z/zlfjm9kls.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wda5zip_i"/><circle transform="rotate(-45 7.435 7.173)" class="zlfjm9kls"/></g>`,
		"fallback": "pepicons:label",
	});
}

export default Component;
