import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh1vxe8iy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh1vxe8iy"/>`,
		"fallback": "bi:minecart",
	});
}

export default Component;
