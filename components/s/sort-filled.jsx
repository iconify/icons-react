import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp_r4gbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rp_r4gbox"/>`,
		"fallback": "reicon:sort-filled",
	});
}

export default Component;
