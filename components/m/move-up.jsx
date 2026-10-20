import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1-kk3b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1-kk3b8u"/>`,
		"fallback": "vadivam:move-up",
	});
}

export default Component;
