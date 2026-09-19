import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiwy8cc9u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiwy8cc9u"/>`,
		"fallback": "dinkie-icons:skull",
	});
}

export default Component;
