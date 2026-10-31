import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erfuebb9p.css';
import '../../css/g/g663zqz4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="erfuebb9p"/><path class="g663zqz4y"/></g>`,
		"fallback": "coolicons:leaf-alt-duotone-round",
	});
}

export default Component;
