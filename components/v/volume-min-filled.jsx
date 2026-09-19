import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy3z4m3dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy3z4m3dn"/>`,
		"fallback": "griddy-icons:volume-min-filled",
	});
}

export default Component;
