import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dszexirpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dszexirpa"/>`,
		"fallback": "ix:sound-quiet-filled",
	});
}

export default Component;
