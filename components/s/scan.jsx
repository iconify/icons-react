import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0pa8b_8s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0pa8b_8s"/>`,
		"fallback": "dinkie-icons:scan",
	});
}

export default Component;
