import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckfic-b8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckfic-b8h"/>`,
		"fallback": "selfhst:seelf-light",
	});
}

export default Component;
