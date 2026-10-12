import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7it3kbjv.css';
import '../../css/u/u5rk34b7w.css';
import '../../css/b/byfs_db6m.css';
import '../../css/g/g7-z5_thi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f7it3kbjv"/><path class="u5rk34b7w"/><path class="byfs_db6m"/><path class="g7-z5_thi"/></g>`,
		"fallback": "lucide-extended:user-shield-duotone",
	});
}

export default Component;
