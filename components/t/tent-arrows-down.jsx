import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw3x82bdy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw3x82bdy"/>`,
		"fallback": "fa6-solid:tent-arrows-down",
	});
}

export default Component;
