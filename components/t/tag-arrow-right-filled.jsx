import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju98jybvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ju98jybvi"/>`,
		"fallback": "ix:tag-arrow-right-filled",
	});
}

export default Component;
