import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k07pw1b8i.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k07pw1b8i"/>`,
		"fallback": "wi:night-snow",
	});
}

export default Component;
