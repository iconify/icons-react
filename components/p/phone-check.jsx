import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeh_gubsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeh_gubsr"/>`,
		"fallback": "noviair:phone-check",
	});
}

export default Component;
