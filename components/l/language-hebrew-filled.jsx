import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpoah6gdk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpoah6gdk"/>`,
		"fallback": "dinkie-icons:language-hebrew-filled",
	});
}

export default Component;
