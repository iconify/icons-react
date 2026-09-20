import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao8jgd4dm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao8jgd4dm"/>`,
		"fallback": "streamline:travel-hotel-iron-laundry-iron-heat",
	});
}

export default Component;
