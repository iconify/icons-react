import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bumd6o66x.css';
import '../../css/i/ix2n_eb7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bumd6o66x"/><path clip-rule="evenodd" class="ix2n_eb7r"/>`,
		"fallback": "lsicon:park-filled",
	});
}

export default Component;
