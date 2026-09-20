import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tged_ebbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tged_ebbb"/>`,
		"fallback": "ri:scan-2-line",
	});
}

export default Component;
