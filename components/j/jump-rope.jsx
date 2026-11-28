import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnom45bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnom45bjq"/>`,
		"fallback": "noviair-light:jump-rope",
	});
}

export default Component;
