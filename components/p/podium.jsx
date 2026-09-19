import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcpkd6bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcpkd6bjj"/>`,
		"fallback": "ion:podium",
	});
}

export default Component;
