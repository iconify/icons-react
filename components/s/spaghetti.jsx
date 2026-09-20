import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh4kocbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh4kocbzk"/>`,
		"fallback": "mdi:spaghetti",
	});
}

export default Component;
