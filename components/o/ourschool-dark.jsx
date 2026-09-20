import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os1_vdd3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os1_vdd3z"/>`,
		"fallback": "selfhst:ourschool-dark",
	});
}

export default Component;
