import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opogr211w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opogr211w"/>`,
		"fallback": "hugeicons:plus-minus-03",
	});
}

export default Component;
