import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9al3db7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9al3db7p"/>`,
		"fallback": "file-icons:lightwave",
	});
}

export default Component;
