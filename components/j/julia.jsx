import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivrixx72s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivrixx72s"/>`,
		"fallback": "file-icons:julia",
	});
}

export default Component;
