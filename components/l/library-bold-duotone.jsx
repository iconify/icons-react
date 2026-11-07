import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1d76596a.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a7wynk4qy.css';
import '../../css/g/g2kigbbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p1d76596a"/><g class="xtpeb-edw"><path class="a7wynk4qy"/><path class="g2kigbbqe"/></g>`,
		"fallback": "solar:library-bold-duotone",
	});
}

export default Component;
