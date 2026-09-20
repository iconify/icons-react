import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njo4stv8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njo4stv8v"/>`,
		"fallback": "mdi:pot-light-round-variant",
	});
}

export default Component;
