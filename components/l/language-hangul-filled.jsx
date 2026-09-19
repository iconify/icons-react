import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s08092quh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s08092quh"/>`,
		"fallback": "dinkie-icons:language-hangul-filled",
	});
}

export default Component;
