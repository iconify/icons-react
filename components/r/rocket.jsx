import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijr2x6b_i.css';
import '../../css/o/oytrt9bzh.css';
import '../../css/q/q86oxrfzk.css';
import '../../css/j/j2j98928d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijr2x6b_i"/><path class="oytrt9bzh"/><path class="q86oxrfzk"/><circle transform="rotate(45 15.918 8.082)" class="j2j98928d"/></g>`,
		"fallback": "proicons:rocket",
	});
}

export default Component;
