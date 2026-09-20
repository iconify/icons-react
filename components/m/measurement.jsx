import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z298f_00y.css';
import '../../css/s/sk16c8bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z298f_00y"/><path class="sk16c8bxa"/></g>`,
		"fallback": "tdesign:measurement",
	});
}

export default Component;
