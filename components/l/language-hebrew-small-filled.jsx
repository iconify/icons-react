import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo0vp2bog.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo0vp2bog"/>`,
		"fallback": "dinkie-icons:language-hebrew-small-filled",
	});
}

export default Component;
