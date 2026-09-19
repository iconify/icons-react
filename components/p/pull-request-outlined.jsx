import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdhztamvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdhztamvg"/>`,
		"fallback": "eos-icons:pull-request-outlined",
	});
}

export default Component;
