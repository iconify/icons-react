import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfh-7gbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfh-7gbgw"/>`,
		"fallback": "ri:search-eye-fill",
	});
}

export default Component;
