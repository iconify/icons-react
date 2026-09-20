import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx9oalqzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx9oalqzz"/>`,
		"fallback": "pinhead:person-slipping-down-steps",
	});
}

export default Component;
