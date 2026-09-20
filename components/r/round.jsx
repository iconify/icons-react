import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_362pbxn.css';
import '../../css/q/qti5l8beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="f_362pbxn"/><circle class="qti5l8beu"/></g>`,
		"fallback": "tdesign:round",
	});
}

export default Component;
