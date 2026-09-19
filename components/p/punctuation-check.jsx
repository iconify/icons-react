import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz4wp-bec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz4wp-bec"/>`,
		"fallback": "carbon:punctuation-check",
	});
}

export default Component;
