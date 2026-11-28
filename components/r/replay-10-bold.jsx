import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ztp6gpg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ztp6gpg"/>`,
		"fallback": "pullo:replay-10-bold",
	});
}

export default Component;
