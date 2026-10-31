import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ced08nb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ced08nb-d"/>`,
		"fallback": "coolicons:user-minus-corner-fill-round",
	});
}

export default Component;
