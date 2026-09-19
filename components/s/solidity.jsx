import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn3wbh0ei.css';

const viewBox = {"width":330,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn3wbh0ei"/>`,
		"fallback": "file-icons:solidity",
	});
}

export default Component;
