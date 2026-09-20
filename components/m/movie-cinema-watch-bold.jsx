import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb7mribhr.css';
import '../../css/g/gt_-n5bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb7mribhr"/><path class="gt_-n5bcz"/>`,
		"fallback": "streamline-ultimate:movie-cinema-watch-bold",
	});
}

export default Component;
