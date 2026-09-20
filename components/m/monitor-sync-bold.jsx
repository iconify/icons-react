import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd8fy92kx.css';
import '../../css/j/jx5rxd8gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd8fy92kx"/><path class="jx5rxd8gf"/>`,
		"fallback": "streamline-ultimate:monitor-sync-bold",
	});
}

export default Component;
