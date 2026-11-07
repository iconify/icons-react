import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc6rf6byt.css';
import '../../css/i/icodl6btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hc6rf6byt"/><path class="icodl6btk"/>`,
		"fallback": "solar:skip-next-outline",
	});
}

export default Component;
