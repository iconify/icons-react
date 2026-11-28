import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb8nr3lcd.css';
import '../../css/b/bbm6ali0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gb8nr3lcd secondary"/><path class="bbm6ali0a primary"/></g>`,
		"fallback": "iconaut:pig-duotone",
	});
}

export default Component;
