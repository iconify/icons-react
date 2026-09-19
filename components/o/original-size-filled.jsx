import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztrm5fe8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztrm5fe8m"/>`,
		"fallback": "griddy-icons:original-size-filled",
	});
}

export default Component;
