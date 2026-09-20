import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwpo4xbeq.css';
import '../../css/o/ofc_1ckbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwpo4xbeq"/><path class="ofc_1ckbo"/>`,
		"fallback": "selfhst:rauthy",
	});
}

export default Component;
