import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0g21bb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0g21bb9a"/>`,
		"fallback": "ri:menu-add-line",
	});
}

export default Component;
