import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktv_fpbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktv_fpbzs"/>`,
		"fallback": "thesvg-color:ovh",
	});
}

export default Component;
