import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1kzwfi4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1kzwfi4u"/>`,
		"fallback": "octicon:unwrap-16",
	});
}

export default Component;
