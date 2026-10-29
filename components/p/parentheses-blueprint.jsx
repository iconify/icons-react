import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ow7qzrb3h.css';
import '../../css/i/ik09c_b2k.css';
import '../../css/m/m9_-f2byv.css';
import '../../css/b/b9dbb0e0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ow7qzrb3h wm-deco"/><path class="ik09c_b2k wm-deco"/><path class="m9_-f2byv"/><path class="b9dbb0e0u"/></g>`,
		"fallback": "withicons:parentheses-blueprint",
	});
}

export default Component;
