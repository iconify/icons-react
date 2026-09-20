import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_yym11fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_yym11fv"/>`,
		"fallback": "mdi:shape-rectangle-plus",
	});
}

export default Component;
