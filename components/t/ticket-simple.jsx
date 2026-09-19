import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jip_zkn3b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jip_zkn3b"/>`,
		"fallback": "fa6-solid:ticket-simple",
	});
}

export default Component;
