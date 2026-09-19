import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knc22co5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knc22co5h"/>`,
		"fallback": "icomoon-free:play3",
	});
}

export default Component;
