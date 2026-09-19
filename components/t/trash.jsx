import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exq42-b6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exq42-b6g"/>`,
		"fallback": "icons8:trash",
	});
}

export default Component;
