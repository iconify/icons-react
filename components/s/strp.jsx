import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4ncc7bcu.css';
import '../../css/s/s5o4ji33z.css';
import '../../css/s/shoqvpbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4ncc7bcu"/><path class="s5o4ji33z"/><path class="shoqvpbig"/>`,
		"fallback": "token:strp",
	});
}

export default Component;
