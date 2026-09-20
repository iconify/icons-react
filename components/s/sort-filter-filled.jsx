import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcw0y79um.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wcw0y79um"/>`,
		"fallback": "lsicon:sort-filter-filled",
	});
}

export default Component;
