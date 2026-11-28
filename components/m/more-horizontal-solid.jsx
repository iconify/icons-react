import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozuqne_mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozuqne_mx"/>`,
		"fallback": "iconaut:more-horizontal-solid",
	});
}

export default Component;
