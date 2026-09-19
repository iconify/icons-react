import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhw5mlbbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhw5mlbbn"/>`,
		"fallback": "icomoon-free:phone-hang-up",
	});
}

export default Component;
