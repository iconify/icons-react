import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psvt2kbpb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psvt2kbpb"/>`,
		"fallback": "garden:phone-call-transfer-only-fill-16",
	});
}

export default Component;
