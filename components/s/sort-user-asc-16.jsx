import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpovbmj2v.css';
import '../../css/i/ixft57bdo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpovbmj2v"/><path clip-rule="evenodd" class="ixft57bdo"/>`,
		"fallback": "qlementine-icons:sort-user-asc-16",
	});
}

export default Component;
