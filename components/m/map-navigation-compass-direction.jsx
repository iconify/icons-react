import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh57mdb9w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh57mdb9w"/>`,
		"fallback": "streamline-pixel:map-navigation-compass-direction",
	});
}

export default Component;
