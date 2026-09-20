import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0l-2y22w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0l-2y22w"/>`,
		"fallback": "pinhead:patriarchal-cross",
	});
}

export default Component;
