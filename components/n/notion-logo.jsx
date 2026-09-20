import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfa1xv1fh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfa1xv1fh"/>`,
		"fallback": "radix-icons:notion-logo",
	});
}

export default Component;
