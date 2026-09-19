import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srsb_8zfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srsb_8zfe"/>`,
		"fallback": "ion:network",
	});
}

export default Component;
