import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsb8ijb3x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsb8ijb3x"/>`,
		"fallback": "devicon-plain:ocaml",
	});
}

export default Component;
