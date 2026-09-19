import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhqgeeukd.css';
import '../../css/g/g97n7gbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhqgeeukd"/><path class="g97n7gbnl"/>`,
		"fallback": "boxicons:towel-filled",
	});
}

export default Component;
