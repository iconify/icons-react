import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxrrs146k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxrrs146k"/>`,
		"fallback": "vadivam:map-pin-x-inside",
	});
}

export default Component;
