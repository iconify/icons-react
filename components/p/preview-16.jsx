import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqykx7ber.css';
import '../../css/a/ayrt9cq7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqykx7ber"/><path clip-rule="evenodd" class="ayrt9cq7j"/>`,
		"fallback": "qlementine-icons:preview-16",
	});
}

export default Component;
