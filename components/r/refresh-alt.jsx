import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ityqu6bxt.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ityqu6bxt"/>`,
		"fallback": "wi:refresh-alt",
	});
}

export default Component;
