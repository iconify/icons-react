import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoosdlbeb.css';

const viewBox = {"width":524,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoosdlbeb"/>`,
		"fallback": "file-icons:npm-old",
	});
}

export default Component;
