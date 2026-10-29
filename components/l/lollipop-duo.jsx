import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o0sdqdbaj.css';
import '../../css/m/mye-p1bbs.css';
import '../../css/g/giai2jb9v.css';
import '../../css/d/dm7wguq1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o0sdqdbaj"/><path class="mye-p1bbs wm-a"/><path class="giai2jb9v"/><path class="dm7wguq1j"/></g>`,
		"fallback": "withicons:lollipop-duo",
	});
}

export default Component;
