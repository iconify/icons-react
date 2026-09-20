import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zja1g2tpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zja1g2tpg"/>`,
		"fallback": "ri:time-zone-fill",
	});
}

export default Component;
