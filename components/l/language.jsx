import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kko_rr_sf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kko_rr_sf"/>`,
		"fallback": "famicons:language",
	});
}

export default Component;
