import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsx-s2bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsx-s2bsf"/>`,
		"fallback": "mynaui:letter-u-diamond-solid",
	});
}

export default Component;
