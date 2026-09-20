import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csd2fybuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csd2fybuj"/>`,
		"fallback": "uis:user-nurse",
	});
}

export default Component;
