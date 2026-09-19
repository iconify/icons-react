import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3e9_7b5r.css';

const viewBox = {"width":420,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3e9_7b5r"/>`,
		"fallback": "file-icons:storybook",
	});
}

export default Component;
