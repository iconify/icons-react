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
		"content": `<defs><path id="SVGpHmZZbqf" class="e00fw2bit"/></defs><use href="#SVGpHmZZbqf"/><path class="vz-n1gf_b"/><use href="#SVGpHmZZbqf"/>`,
		"fallback": "ion:phone-portrait",
	});
}

export default Component;
