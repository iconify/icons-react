import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq7zz_bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq7zz_bpt"/>`,
		"fallback": "thesvg:nano-stores",
	});
}

export default Component;
