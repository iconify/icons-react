import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itnu9cc9i.css';
import '../../css/j/j49a82dzi.css';
import '../../css/o/o8g0obc8w.css';
import '../../css/u/upw9b3bds.css';
import '../../css/u/ulld3xbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itnu9cc9i"/><path class="j49a82dzi"/><path class="o8g0obc8w"/><path class="upw9b3bds"/><path class="ulld3xbqb"/></g>`,
		"fallback": "streamline-ultimate-color:office-file-xls",
	});
}

export default Component;
