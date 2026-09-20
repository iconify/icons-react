import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqb0h2zhn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqb0h2zhn"/>`,
		"fallback": "pinhead:person-riding-swing",
	});
}

export default Component;
