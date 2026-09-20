import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnvi5udrv.css';
import '../../css/c/cewbhzhbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tnvi5udrv"/><path class="cewbhzhbq"/></g>`,
		"fallback": "tdesign:user-search",
	});
}

export default Component;
