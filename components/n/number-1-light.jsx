import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrg-zm8yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrg-zm8yp"/>`,
		"fallback": "iconamoon:number-1-light",
	});
}

export default Component;
