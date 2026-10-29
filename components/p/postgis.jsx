import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_c_3dfgn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_c_3dfgn"/>`,
		"fallback": "devicon-plain:postgis",
	});
}

export default Component;
