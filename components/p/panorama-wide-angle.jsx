import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi_in7rna.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi_in7rna"/>`,
		"fallback": "zmdi:panorama-wide-angle",
	});
}

export default Component;
