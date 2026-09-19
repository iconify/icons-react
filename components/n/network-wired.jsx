import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoq0fh8gl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoq0fh8gl"/>`,
		"fallback": "fa6-solid:network-wired",
	});
}

export default Component;
