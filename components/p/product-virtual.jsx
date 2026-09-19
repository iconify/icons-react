import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc8p4nbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc8p4nbtn"/>`,
		"fallback": "gridicons:product-virtual",
	});
}

export default Component;
