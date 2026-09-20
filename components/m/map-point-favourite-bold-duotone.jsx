import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z21mj8tjd.css';
import '../../css/c/c5u_5lf0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z21mj8tjd"/><path class="c5u_5lf0t"/>`,
		"fallback": "solar:map-point-favourite-bold-duotone",
	});
}

export default Component;
