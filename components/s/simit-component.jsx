import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x947s0j3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x947s0j3f"/>`,
		"fallback": "ix:simit-component",
	});
}

export default Component;
