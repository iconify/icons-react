import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7ftbybzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7ftbybzv"/>`,
		"fallback": "mdi:mailbox-open-up",
	});
}

export default Component;
