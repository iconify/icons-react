import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ridyy-8nr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ridyy-8nr"/>`,
		"fallback": "ix:play-pause",
	});
}

export default Component;
