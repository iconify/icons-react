import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do6504b1e.css';
import '../../css/w/wpronf74j.css';
import '../../css/w/ws37avcxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do6504b1e"/><path class="wpronf74j"/><path class="ws37avcxc"/>`,
		"fallback": "solar:move-circle-outline",
	});
}

export default Component;
