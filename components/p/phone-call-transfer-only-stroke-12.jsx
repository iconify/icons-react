import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5h3u4r9w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5h3u4r9w"/>`,
		"fallback": "garden:phone-call-transfer-only-stroke-12",
	});
}

export default Component;
