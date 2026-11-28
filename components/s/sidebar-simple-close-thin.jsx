import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzzepkb5a.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzzepkb5a"/>`,
		"fallback": "pullo:sidebar-simple-close-thin",
	});
}

export default Component;
