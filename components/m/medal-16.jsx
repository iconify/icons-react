import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxq3-eb3u.css';
import '../../css/x/x3ezi_wmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxq3-eb3u"/><path clip-rule="evenodd" class="x3ezi_wmn"/>`,
		"fallback": "qlementine-icons:medal-16",
	});
}

export default Component;
