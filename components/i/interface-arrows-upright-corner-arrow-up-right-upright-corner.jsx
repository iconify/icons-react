import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwpz8ab_c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwpz8ab_c"/>`,
		"fallback": "streamline:interface-arrows-upright-corner-arrow-up-right-upright-corner",
	});
}

export default Component;
