import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-0r_040s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-0r_040s"/>`,
		"fallback": "pinhead:person-aiming-rifle",
	});
}

export default Component;
