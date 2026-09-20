import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs99e4b_v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs99e4b_v"/>`,
		"fallback": "lsicon:setting-search-outline",
	});
}

export default Component;
