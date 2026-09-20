import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz9i_4cdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz9i_4cdz"/>`,
		"fallback": "stash:user-group-light",
	});
}

export default Component;
