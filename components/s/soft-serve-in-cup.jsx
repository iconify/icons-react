import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3mp-kbms.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3mp-kbms"/>`,
		"fallback": "pinhead:soft-serve-in-cup",
	});
}

export default Component;
