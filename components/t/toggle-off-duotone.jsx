import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivnme8fnn.css';
import '../../css/n/n3zf9obkq.css';
import '../../css/c/c20im5hsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ivnme8fnn"/><path class="n3zf9obkq"/><path class="c20im5hsr"/></g>`,
		"fallback": "si:toggle-off-duotone",
	});
}

export default Component;
