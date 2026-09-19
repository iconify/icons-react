import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bck2uobie.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bck2uobie"/>`,
		"fallback": "zmdi:search-for",
	});
}

export default Component;
