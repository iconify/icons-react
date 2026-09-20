import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp8r-nmbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp8r-nmbv"/>`,
		"fallback": "ix:warning",
	});
}

export default Component;
