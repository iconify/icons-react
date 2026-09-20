import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh3i-6oef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh3i-6oef"/>`,
		"fallback": "mage:layout-center-fill",
	});
}

export default Component;
