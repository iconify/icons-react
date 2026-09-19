import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwh7i9_ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwh7i9_ct"/>`,
		"fallback": "boxicons:trash-filled",
	});
}

export default Component;
