import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8lzwb5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ba8lzwb5c"/>`,
		"fallback": "ix:video-camera",
	});
}

export default Component;
