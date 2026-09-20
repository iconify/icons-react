import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxnf1q5gt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxnf1q5gt"/>`,
		"fallback": "lsicon:sort-filled",
	});
}

export default Component;
