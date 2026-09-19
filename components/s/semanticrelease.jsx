import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z973zsazu.css';

const viewBox = {"width":444,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z973zsazu"/>`,
		"fallback": "file-icons:semanticrelease",
	});
}

export default Component;
