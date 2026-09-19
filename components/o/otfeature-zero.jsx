import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdx_z_tfr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdx_z_tfr"/>`,
		"fallback": "dinkie-icons:otfeature-zero",
	});
}

export default Component;
