import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8pwkeb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8pwkeb-k"/>`,
		"fallback": "mage:television-check-fill",
	});
}

export default Component;
