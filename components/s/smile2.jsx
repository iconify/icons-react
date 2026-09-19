import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae6sq6hrv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae6sq6hrv"/>`,
		"fallback": "icomoon-free:smile2",
	});
}

export default Component;
