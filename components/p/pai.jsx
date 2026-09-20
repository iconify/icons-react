import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6psufbgn.css';
import '../../css/c/ck6gfpkya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6psufbgn"/><path class="ck6gfpkya"/>`,
		"fallback": "token:pai",
	});
}

export default Component;
