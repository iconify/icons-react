import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkhl2obdc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkhl2obdc"/>`,
		"fallback": "qlementine-icons:play-small-16",
	});
}

export default Component;
