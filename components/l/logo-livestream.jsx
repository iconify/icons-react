import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3-t6yl5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3-t6yl5i"/>`,
		"fallback": "carbon:logo-livestream",
	});
}

export default Component;
