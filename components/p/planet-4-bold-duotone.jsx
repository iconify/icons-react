import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by1cai91s.css';
import '../../css/h/htry6xr6b.css';
import '../../css/u/ut-gx-b7l.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/ctjqh1aad.css';
import '../../css/s/shjp9pbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by1cai91s"/><path class="htry6xr6b"/><path class="ut-gx-b7l"/><g class="xtpeb-edw"><path class="ctjqh1aad"/><path class="shjp9pbqe"/></g>`,
		"fallback": "solar:planet-4-bold-duotone",
	});
}

export default Component;
