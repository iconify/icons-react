import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwe2b1h6w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwe2b1h6w"/>`,
		"fallback": "qlementine-icons:playlist-16",
	});
}

export default Component;
