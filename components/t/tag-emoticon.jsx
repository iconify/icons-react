import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdya3zb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdya3zb4u"/>`,
		"fallback": "mdi:tag-emoticon",
	});
}

export default Component;
