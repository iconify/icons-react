import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vniy-9pnf.css';
import '../../css/r/rp8lt1bxe.css';
import '../../css/j/jmlntsbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vniy-9pnf"/><path class="rp8lt1bxe"/><path class="jmlntsbsv"/></g>`,
		"fallback": "iconamoon:news-duotone",
	});
}

export default Component;
