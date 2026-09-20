import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beeswymqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beeswymqd"/>`,
		"fallback": "streamline-ultimate:location-off-target-bold",
	});
}

export default Component;
