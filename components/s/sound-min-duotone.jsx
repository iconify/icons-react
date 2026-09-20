import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yx57vmbbs.css';
import '../../css/g/g2an002hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="yx57vmbbs"/><path class="g2an002hv"/></g>`,
		"fallback": "lets-icons:sound-min-duotone",
	});
}

export default Component;
