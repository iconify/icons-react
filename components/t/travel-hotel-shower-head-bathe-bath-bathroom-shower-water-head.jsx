import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oag5qxbdu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oag5qxbdu"/>`,
		"fallback": "streamline:travel-hotel-shower-head-bathe-bath-bathroom-shower-water-head",
	});
}

export default Component;
