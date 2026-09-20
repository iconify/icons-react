import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6j7t_y7g.css';
import '../../css/o/od4citb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6j7t_y7g"/><path class="od4citb4g"/>`,
		"fallback": "streamline-ultimate:playlist-download-bold",
	});
}

export default Component;
