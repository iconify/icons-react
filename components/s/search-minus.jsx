import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz9yxmbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz9yxmbxd"/>`,
		"fallback": "uil:search-minus",
	});
}

export default Component;
