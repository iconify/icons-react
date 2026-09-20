import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rky3srb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rky3srb7o"/>`,
		"fallback": "reicon:skirt-filled",
	});
}

export default Component;
