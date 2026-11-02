import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr938p2vn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr938p2vn"/>`,
		"fallback": "pinhead:picnic-table-in-eaved-leanto-shelter",
	});
}

export default Component;
