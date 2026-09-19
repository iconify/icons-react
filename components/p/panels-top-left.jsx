import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv3hncc0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv3hncc0i"/>`,
		"fallback": "hugeicons:panels-top-left",
	});
}

export default Component;
