import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngt43k2ft.css';
import '../../css/h/hi1o7nsyr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngt43k2ft"/><path class="hi1o7nsyr"/>`,
		"fallback": "lineicons:pin",
	});
}

export default Component;
