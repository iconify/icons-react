import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5q-ddpsz.css';
import '../../css/o/owf76acqr.css';
import '../../css/f/fgynpdb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5q-ddpsz"/><path class="owf76acqr"/><path clip-rule="evenodd" class="fgynpdb8l"/>`,
		"fallback": "solar:tornado-bold",
	});
}

export default Component;
