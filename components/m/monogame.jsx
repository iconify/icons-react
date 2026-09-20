import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzk3ncg5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzk3ncg5m"/>`,
		"fallback": "simple-icons:monogame",
	});
}

export default Component;
