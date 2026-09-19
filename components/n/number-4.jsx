import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snraypi8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snraypi8b"/>`,
		"fallback": "griddy-icons:number-4",
	});
}

export default Component;
