import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg8nthb2u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dg8nthb2u"/>`,
		"fallback": "streamline-flex:insurance-hand-1-remix",
	});
}

export default Component;
