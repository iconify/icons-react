import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvg_b900s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvg_b900s"/>`,
		"fallback": "icomoon-free:point-left",
	});
}

export default Component;
