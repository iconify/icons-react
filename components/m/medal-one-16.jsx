import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldffh34lq.css';
import '../../css/x/x3ezi_wmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldffh34lq"/><path clip-rule="evenodd" class="x3ezi_wmn"/>`,
		"fallback": "qlementine-icons:medal-one-16",
	});
}

export default Component;
