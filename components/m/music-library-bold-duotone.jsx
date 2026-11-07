import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd9sx6bdy.css';
import '../../css/f/ftsxs4bzr.css';
import '../../css/d/dtxau0b4t.css';
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
		"content": `<path clip-rule="evenodd" class="xd9sx6bdy"/><path class="ftsxs4bzr"/><path class="dtxau0b4t"/><g class="xtpeb-edw"><path class="a7wynk4qy"/><path class="g2kigbbqe"/></g>`,
		"fallback": "solar:music-library-bold-duotone",
	});
}

export default Component;
