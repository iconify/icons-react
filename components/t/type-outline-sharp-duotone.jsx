import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsf_qtbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsf_qtbke"/>`,
		"fallback": "keyline-icons:type-outline-sharp-duotone",
	});
}

export default Component;
