import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2m6oob6i.css';
import '../../css/u/uoyje9-pu.css';
import '../../css/y/y0d-blzxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2m6oob6i"/><path class="uoyje9-pu"/><path clip-rule="evenodd" class="y0d-blzxl"/>`,
		"fallback": "solar:planet-2-bold-duotone",
	});
}

export default Component;
