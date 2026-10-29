import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gwxm7ts-h.css';
import '../../css/b/b6rt83uyo.css';
import '../../css/o/o-34nlbmr.css';
import '../../css/y/y9drjib_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gwxm7ts-h wm-deco"/><path class="b6rt83uyo wm-k"/><path class="o-34nlbmr wm-a"/><path class="wm-a y9drjib_l"/></g>`,
		"fallback": "withicons:peacock-feather-blueprint",
	});
}

export default Component;
