import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s730z_fif.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s730z_fif"/>`,
		"fallback": "whh:mickeymouse",
	});
}

export default Component;
