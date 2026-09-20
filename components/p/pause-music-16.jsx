import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjowf5brh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjowf5brh"/>`,
		"fallback": "qlementine-icons:pause-music-16",
	});
}

export default Component;
