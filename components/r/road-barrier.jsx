import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvfm1dber.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvfm1dber"/>`,
		"fallback": "fa7-solid:road-barrier",
	});
}

export default Component;
