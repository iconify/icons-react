import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ombmqu5rn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ombmqu5rn"/>`,
		"fallback": "ion:md-play-circle",
	});
}

export default Component;
