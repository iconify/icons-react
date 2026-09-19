import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0hd_7v4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0hd_7v4c"/>`,
		"fallback": "griddy-icons:slack-filled",
	});
}

export default Component;
