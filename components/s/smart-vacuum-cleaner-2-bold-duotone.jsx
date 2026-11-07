import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v5wadhqzm.css';
import '../../css/f/fua2m0b8b.css';
import '../../css/u/uvu9w-b5w.css';
import '../../css/x/x084lm06v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="v5wadhqzm"/><path class="fua2m0b8b"/></g><path class="uvu9w-b5w"/><path clip-rule="evenodd" class="x084lm06v"/>`,
		"fallback": "solar:smart-vacuum-cleaner-2-bold-duotone",
	});
}

export default Component;
