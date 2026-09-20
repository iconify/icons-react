import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hflsuxw7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hflsuxw7d"/>`,
		"fallback": "la:praying-hands",
	});
}

export default Component;
