import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b99bgvatr.css';
import '../../css/l/lu_9qfbls.css';
import '../../css/m/mk7_fccwz.css';
import '../../css/c/cvwjuk0bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b99bgvatr"/><path class="lu_9qfbls wm-a"/><path class="mk7_fccwz wm-a"/><path class="cvwjuk0bx"/></g>`,
		"fallback": "withicons:thumbs-up-duo",
	});
}

export default Component;
