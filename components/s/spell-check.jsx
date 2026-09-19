import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf_z22dla.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf_z22dla"/>`,
		"fallback": "fa6-solid:spell-check",
	});
}

export default Component;
