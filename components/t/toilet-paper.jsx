import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipn5owbvp.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipn5owbvp"/>`,
		"fallback": "fa-solid:toilet-paper",
	});
}

export default Component;
