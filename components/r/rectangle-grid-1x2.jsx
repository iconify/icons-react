import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-pc_6xg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-pc_6xg"/>`,
		"fallback": "f7:rectangle-grid-1x2",
	});
}

export default Component;
