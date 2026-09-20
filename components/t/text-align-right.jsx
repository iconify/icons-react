import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzm2_nzau.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzm2_nzau"/>`,
		"fallback": "radix-icons:text-align-right",
	});
}

export default Component;
