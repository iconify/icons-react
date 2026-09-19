import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouw1vrhjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouw1vrhjd"/>`,
		"fallback": "gcp:standard-network-tier",
	});
}

export default Component;
