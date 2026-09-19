import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uodm3s_en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uodm3s_en"/>`,
		"fallback": "gridicons:sign-out",
	});
}

export default Component;
