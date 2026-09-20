import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utw4vn0zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utw4vn0zz"/>`,
		"fallback": "stash:save-ribbon-light",
	});
}

export default Component;
