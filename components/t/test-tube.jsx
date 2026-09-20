import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izqfe9b4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izqfe9b4u"/>`,
		"fallback": "streamline:test-tube",
	});
}

export default Component;
