import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic8csbqvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic8csbqvz"/>`,
		"fallback": "simple-icons:steamdeck",
	});
}

export default Component;
