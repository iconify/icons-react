import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz44xsv-i.css';
import '../../css/i/i6iu0p2uk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz44xsv-i"/><path class="i6iu0p2uk"/>`,
		"fallback": "ion:md-bookmarks",
	});
}

export default Component;
