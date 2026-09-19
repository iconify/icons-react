import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieh18j3cd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieh18j3cd"/>`,
		"fallback": "academicons:osf-square",
	});
}

export default Component;
