import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs_njs9ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs_njs9ot"/>`,
		"fallback": "simple-icons:testcafe",
	});
}

export default Component;
