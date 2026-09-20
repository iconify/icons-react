import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/depz1ebrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="depz1ebrx"/>`,
		"fallback": "mdi:sina-weibo",
	});
}

export default Component;
