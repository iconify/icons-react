import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugg4w_bmp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugg4w_bmp"/>`,
		"fallback": "lineicons:spinner-arrow",
	});
}

export default Component;
