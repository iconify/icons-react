import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyc0uprxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyc0uprxe"/>`,
		"fallback": "noviair:office-building-search",
	});
}

export default Component;
