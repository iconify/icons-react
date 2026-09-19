import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sijxjfgam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sijxjfgam"/>`,
		"fallback": "icomoon-free:pencil2",
	});
}

export default Component;
