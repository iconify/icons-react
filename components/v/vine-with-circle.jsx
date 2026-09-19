import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9vy3s1jz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9vy3s1jz"/>`,
		"fallback": "entypo-social:vine-with-circle",
	});
}

export default Component;
