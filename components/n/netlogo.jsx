import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei7bin-rq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei7bin-rq"/>`,
		"fallback": "file-icons:netlogo",
	});
}

export default Component;
