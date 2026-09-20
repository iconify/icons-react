import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahh5kkqgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahh5kkqgn"/>`,
		"fallback": "mdi:language-fortran",
	});
}

export default Component;
