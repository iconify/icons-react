import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq8uv6ybu.css';

const viewBox = {"width":423,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq8uv6ybu"/>`,
		"fallback": "file-icons:nightwatch",
	});
}

export default Component;
