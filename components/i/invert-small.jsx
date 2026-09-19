import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csesmy2vu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csesmy2vu"/>`,
		"fallback": "dinkie-icons:invert-small",
	});
}

export default Component;
