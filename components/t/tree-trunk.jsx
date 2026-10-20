import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh9bfhbov.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh9bfhbov"/>`,
		"fallback": "pinhead:tree-trunk",
	});
}

export default Component;
