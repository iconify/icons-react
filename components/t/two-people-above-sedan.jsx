import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcb4e8b-v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcb4e8b-v"/>`,
		"fallback": "pinhead:two-people-above-sedan",
	});
}

export default Component;
