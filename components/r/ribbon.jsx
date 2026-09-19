import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrwimzbtd.css';

const viewBox = {"width":28,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrwimzbtd"/>`,
		"fallback": "et:ribbon",
	});
}

export default Component;
