import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epl4z1bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epl4z1bxq"/>`,
		"fallback": "mdi:search",
	});
}

export default Component;
