import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abysg8brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abysg8brq"/>`,
		"fallback": "ri:parking-box-line",
	});
}

export default Component;
