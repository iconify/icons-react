import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_rht5bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_rht5bvq"/>`,
		"fallback": "hugeicons:more-horizontal-square-01",
	});
}

export default Component;
