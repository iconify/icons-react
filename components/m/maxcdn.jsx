import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aika05jib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aika05jib"/>`,
		"fallback": "fa6-brands:maxcdn",
	});
}

export default Component;
