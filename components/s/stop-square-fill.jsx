import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sma0iqctz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sma0iqctz"/>`,
		"fallback": "mage:stop-square-fill",
	});
}

export default Component;
