import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by-xubbqm.css';
import '../../css/g/ga-5_8_3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="by-xubbqm"/><path class="ga-5_8_3v"/></g>`,
		"fallback": "tdesign:table-2",
	});
}

export default Component;
