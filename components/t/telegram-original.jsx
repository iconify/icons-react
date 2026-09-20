import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drjbh1b6x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drjbh1b6x"/>`,
		"fallback": "lineicons:telegram-original",
	});
}

export default Component;
