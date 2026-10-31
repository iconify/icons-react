import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/itaimiz6e.css';
import '../../css/y/y_xsdac9i.css';
import '../../css/s/s_3yu-uqg.css';
import '../../css/h/h9vxrvbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="itaimiz6e wm-shadow"/><path class="wm-shadow y_xsdac9i"/><path class="s_3yu-uqg"/><path class="h9vxrvbit"/></g>`,
		"fallback": "withicons-brutal:settings-2",
	});
}

export default Component;
