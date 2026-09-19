import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyudlj52o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyudlj52o"/>`,
		"fallback": "f7:power",
	});
}

export default Component;
