import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp6t8obxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp6t8obxz"/>`,
		"fallback": "coolicons:voicemail-fill-round",
	});
}

export default Component;
