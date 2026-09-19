import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb1xtlv4b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb1xtlv4b"/>`,
		"fallback": "f7:sunrise-fill",
	});
}

export default Component;
