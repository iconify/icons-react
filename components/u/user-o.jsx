import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb3s7_7hd.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb3s7_7hd"/>`,
		"fallback": "fa:user-o",
	});
}

export default Component;
