import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efl8wly-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efl8wly-r"/>`,
		"fallback": "file-icons:postscript",
	});
}

export default Component;
