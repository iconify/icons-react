import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln3awga8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln3awga8d"/>`,
		"fallback": "streamline:triangle-flag",
	});
}

export default Component;
