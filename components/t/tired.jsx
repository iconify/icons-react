import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adrsww8cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adrsww8cl"/>`,
		"fallback": "fe:tired",
	});
}

export default Component;
