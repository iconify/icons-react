import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5krske9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a5krske9b"/>`,
		"fallback": "file-icons:sketch",
	});
}

export default Component;
