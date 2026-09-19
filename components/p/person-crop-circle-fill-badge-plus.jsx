import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqukjzb3t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqukjzb3t"/>`,
		"fallback": "f7:person-crop-circle-fill-badge-plus",
	});
}

export default Component;
