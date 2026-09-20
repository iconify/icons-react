import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw31-9b4z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw31-9b4z"/>`,
		"fallback": "la:kickstarter-k",
	});
}

export default Component;
