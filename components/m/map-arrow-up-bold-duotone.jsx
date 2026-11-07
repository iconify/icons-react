import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fevon8ayl.css';
import '../../css/z/z9t-ptwsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fevon8ayl"/><path class="z9t-ptwsn"/>`,
		"fallback": "solar:map-arrow-up-bold-duotone",
	});
}

export default Component;
