import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5r3apoeq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5r3apoeq"/>`,
		"fallback": "pinhead:person-vomiting",
	});
}

export default Component;
