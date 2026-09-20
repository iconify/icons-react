import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfb0ibcol.css';
import '../../css/m/m1m99qwsu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfb0ibcol"/><path class="m1m99qwsu"/>`,
		"fallback": "lineicons:money-protection",
	});
}

export default Component;
