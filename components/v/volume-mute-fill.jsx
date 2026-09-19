import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4no5ubeq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4no5ubeq"/>`,
		"fallback": "bi:volume-mute-fill",
	});
}

export default Component;
