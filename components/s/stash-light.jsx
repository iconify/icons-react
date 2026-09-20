import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j74t30j-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j74t30j-k"/>`,
		"fallback": "selfhst:stash-light",
	});
}

export default Component;
