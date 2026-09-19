import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miwen_ndd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miwen_ndd"/>`,
		"fallback": "basil:pinterest-solid",
	});
}

export default Component;
