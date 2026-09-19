import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0u-p9smw.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0u-p9smw"/>`,
		"fallback": "fa6-solid:suitcase-rolling",
	});
}

export default Component;
