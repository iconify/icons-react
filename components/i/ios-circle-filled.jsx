import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itc5zdbai.css';
import '../../css/o/o6w0dd8_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itc5zdbai"/><path class="o6w0dd8_g"/>`,
		"fallback": "ion:ios-circle-filled",
	});
}

export default Component;
