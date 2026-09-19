import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifl6gthti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifl6gthti"/>`,
		"fallback": "hugeicons:volume-mute-01",
	});
}

export default Component;
