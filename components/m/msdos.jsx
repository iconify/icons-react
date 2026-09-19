import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dka_02h5o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dka_02h5o"/>`,
		"fallback": "devicon-plain:msdos",
	});
}

export default Component;
