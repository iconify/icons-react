import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx4_asb2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx4_asb2v"/>`,
		"fallback": "file-icons:jsonnet",
	});
}

export default Component;
