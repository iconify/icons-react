import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e00fw2bit.css';
import '../../css/v/vz-n1gf_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG0BHc9coD" class="e00fw2bit"/></defs><use href="#SVG0BHc9coD"/><path class="vz-n1gf_b"/><use href="#SVG0BHc9coD"/>`,
		"fallback": "famicons:phone-portrait",
	});
}

export default Component;
