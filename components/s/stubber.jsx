import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scmdz_bdt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scmdz_bdt"/>`,
		"fallback": "fa6-brands:stubber",
	});
}

export default Component;
