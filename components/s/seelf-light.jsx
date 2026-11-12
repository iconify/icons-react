import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yil0imbyt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yil0imbyt"/>`,
		"fallback": "selfhst:seelf-light",
	});
}

export default Component;
