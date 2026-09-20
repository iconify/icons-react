import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebm2gkc5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebm2gkc5z"/>`,
		"fallback": "token:kma",
	});
}

export default Component;
