import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kricpd2si.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kricpd2si"/>`,
		"fallback": "fa-solid:ticket-alt",
	});
}

export default Component;
