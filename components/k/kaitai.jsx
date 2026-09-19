import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeh4fhb6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeh4fhb6v"/>`,
		"fallback": "file-icons:kaitai",
	});
}

export default Component;
