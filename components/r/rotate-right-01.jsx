import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndhirqc9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndhirqc9g"/>`,
		"fallback": "hugeicons:rotate-right-01",
	});
}

export default Component;
