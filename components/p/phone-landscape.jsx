import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zngyz-aul.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zngyz-aul"/>`,
		"fallback": "system-uicons:phone-landscape",
	});
}

export default Component;
