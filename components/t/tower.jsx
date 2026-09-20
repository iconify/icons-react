import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyhn5_blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyhn5_blw"/>`,
		"fallback": "simple-icons:tower",
	});
}

export default Component;
