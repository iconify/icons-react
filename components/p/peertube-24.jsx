import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acs_d8b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="acs_d8b1b"/>`,
		"fallback": "qlementine-icons:peertube-24",
	});
}

export default Component;
