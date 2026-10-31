import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv21jdfsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hv21jdfsg"/>`,
		"fallback": "sidekickicons:quotation-mark-solid",
	});
}

export default Component;
