import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc2_l_b3t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc2_l_b3t"/>`,
		"fallback": "garden:phone-pause-fill-20",
	});
}

export default Component;
