import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ollz-969b.css';
import '../../css/j/jj1scnbfm.css';
import '../../css/s/st5yxik0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ollz-969b"/><rect class="jj1scnbfm"/><path class="st5yxik0w"/></g>`,
		"fallback": "reicon:presentation-screen",
	});
}

export default Component;
