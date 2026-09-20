import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3k4apb6l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3k4apb6l"/>`,
		"fallback": "pinhead:person-riding-tube-on-water",
	});
}

export default Component;
