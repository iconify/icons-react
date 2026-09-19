import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh6lj8bhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh6lj8bhq"/>`,
		"fallback": "bi:sunset-fill",
	});
}

export default Component;
