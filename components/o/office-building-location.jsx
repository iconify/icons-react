import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoe0bnkcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoe0bnkcd"/>`,
		"fallback": "mdi:office-building-location",
	});
}

export default Component;
