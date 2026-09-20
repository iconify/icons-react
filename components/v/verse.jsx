import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6mk2emto.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6mk2emto"/>`,
		"fallback": "material-icon-theme:verse",
	});
}

export default Component;
