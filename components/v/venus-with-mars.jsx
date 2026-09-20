import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br_g0_8yr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br_g0_8yr"/>`,
		"fallback": "pinhead:venus-with-mars",
	});
}

export default Component;
