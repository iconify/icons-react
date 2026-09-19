import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4e87f__o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4e87f__o"/>`,
		"fallback": "garden:phone-call-transfer-fill-16",
	});
}

export default Component;
