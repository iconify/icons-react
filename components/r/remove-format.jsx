import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh3e_4i8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh3e_4i8e"/>`,
		"fallback": "majesticons:remove-format",
	});
}

export default Component;
