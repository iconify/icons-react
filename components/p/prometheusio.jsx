import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va3jfl8-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va3jfl8-b"/>`,
		"fallback": "cbi:prometheusio",
	});
}

export default Component;
