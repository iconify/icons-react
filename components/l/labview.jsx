import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6be-kb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6be-kb4s"/>`,
		"fallback": "file-icons:labview",
	});
}

export default Component;
