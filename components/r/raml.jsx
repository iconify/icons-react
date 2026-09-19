import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa3ux0u-x.css';

const viewBox = {"width":437,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa3ux0u-x"/>`,
		"fallback": "file-icons:raml",
	});
}

export default Component;
