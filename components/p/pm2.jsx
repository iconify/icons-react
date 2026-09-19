import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftrj3efiz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftrj3efiz"/>`,
		"fallback": "file-icons:pm2",
	});
}

export default Component;
