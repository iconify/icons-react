import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek4kr_bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek4kr_bbd"/>`,
		"fallback": "thesvg-color:standard-resume",
	});
}

export default Component;
