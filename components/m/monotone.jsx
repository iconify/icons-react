import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r10w3649d.css';

const viewBox = {"width":415,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r10w3649d"/>`,
		"fallback": "file-icons:monotone",
	});
}

export default Component;
