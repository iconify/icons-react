import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp1bg9iuc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp1bg9iuc"/>`,
		"fallback": "dinkie-icons:language-hangul-small-filled",
	});
}

export default Component;
