import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a40znebno.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a40znebno"/>`,
		"fallback": "dinkie-icons:otfeature-ss02-small-filled",
	});
}

export default Component;
