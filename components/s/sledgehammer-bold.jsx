import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaeey4wki.css';
import '../../css/v/v1sgvk7sy.css';
import '../../css/o/oq1kt7b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaeey4wki"/><path class="v1sgvk7sy"/><path class="oq1kt7b-g"/>`,
		"fallback": "solar:sledgehammer-bold",
	});
}

export default Component;
