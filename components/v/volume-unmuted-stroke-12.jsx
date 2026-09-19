import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4hgy2b2w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4hgy2b2w"/>`,
		"fallback": "garden:volume-unmuted-stroke-12",
	});
}

export default Component;
