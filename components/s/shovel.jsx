import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5d0hccew.css';
import '../../css/w/w09p6yc8f.css';
import '../../css/e/ere1wq24f.css';
import '../../css/r/r7f535bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a5d0hccew wm-shadow"/><path class="w09p6yc8f wm-shadow"/><path class="ere1wq24f"/><path class="r7f535bef"/></g>`,
		"fallback": "withicons-brutal:shovel",
	});
}

export default Component;
