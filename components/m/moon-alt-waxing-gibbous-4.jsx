import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvt6i0b8a.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvt6i0b8a"/>`,
		"fallback": "wi:moon-alt-waxing-gibbous-4",
	});
}

export default Component;
