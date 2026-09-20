import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r23xi1szi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r23xi1szi"/>`,
		"fallback": "mage:light-bulb-electricity-fill",
	});
}

export default Component;
