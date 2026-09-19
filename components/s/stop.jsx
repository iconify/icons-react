import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xez50c7he.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xez50c7he"/>`,
		"fallback": "bi:stop",
	});
}

export default Component;
