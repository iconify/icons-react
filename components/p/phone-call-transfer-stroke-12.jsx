import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kald8wfhc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kald8wfhc"/>`,
		"fallback": "garden:phone-call-transfer-stroke-12",
	});
}

export default Component;
