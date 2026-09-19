import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh62jbbck.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh62jbbck"/>`,
		"fallback": "devicon-plain:vyper",
	});
}

export default Component;
