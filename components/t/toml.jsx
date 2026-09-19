import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oce441wpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oce441wpl"/>`,
		"fallback": "file-icons:toml",
	});
}

export default Component;
