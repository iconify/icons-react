import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvbtimb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvbtimb4u"/>`,
		"fallback": "noviair-light:pound",
	});
}

export default Component;
