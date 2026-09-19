import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ayah9kg.css';

const viewBox = {"width":376,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ayah9kg"/>`,
		"fallback": "file-icons:jupyter",
	});
}

export default Component;
