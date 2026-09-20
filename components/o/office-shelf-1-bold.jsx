import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h156wkdle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h156wkdle"/>`,
		"fallback": "streamline-ultimate:office-shelf-1-bold",
	});
}

export default Component;
