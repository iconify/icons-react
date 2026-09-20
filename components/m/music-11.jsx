import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnafimb2b.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnafimb2b"/>`,
		"fallback": "maki:music-11",
	});
}

export default Component;
