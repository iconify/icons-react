import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djh7c23qx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djh7c23qx"/>`,
		"fallback": "devicon-plain:quarkus",
	});
}

export default Component;
