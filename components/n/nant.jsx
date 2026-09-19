import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo2nb0bvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo2nb0bvd"/>`,
		"fallback": "file-icons:nant",
	});
}

export default Component;
