import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8xwu9g6i.css';
import '../../css/g/gxciwdbjh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="s8xwu9g6i"/><path class="gxciwdbjh"/>`,
		"fallback": "famicons:phone-portrait-outline",
	});
}

export default Component;
