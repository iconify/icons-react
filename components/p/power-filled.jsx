import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0p1c05ns.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r0p1c05ns"/>`,
		"fallback": "lsicon:power-filled",
	});
}

export default Component;
