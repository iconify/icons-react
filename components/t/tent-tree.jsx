import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddjkb6b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddjkb6b-z"/>`,
		"fallback": "vadivam:tent-tree",
	});
}

export default Component;
