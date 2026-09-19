import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y350s-bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y350s-bsq"/>`,
		"fallback": "hugeicons:package-01",
	});
}

export default Component;
