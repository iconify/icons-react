import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8aoz-b-u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8aoz-b-u"/>`,
		"fallback": "dinkie-icons:otfeature-ss01",
	});
}

export default Component;
