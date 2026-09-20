import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yimgu8b5h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yimgu8b5h"/>`,
		"fallback": "pinhead:screw-beside-nail",
	});
}

export default Component;
