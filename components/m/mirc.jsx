import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-0m7-b9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-0m7-b9f"/>`,
		"fallback": "file-icons:mirc",
	});
}

export default Component;
