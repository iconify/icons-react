import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjz_80bly.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjz_80bly"/>`,
		"fallback": "icomoon-free:user",
	});
}

export default Component;
