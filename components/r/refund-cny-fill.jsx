import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn6i_fowy.css';
import '../../css/a/adhtr2bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn6i_fowy"/><path class="adhtr2bik"/>`,
		"fallback": "mingcute:refund-cny-fill",
	});
}

export default Component;
