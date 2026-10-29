import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c4m7y61rf.css';
import '../../css/p/petj3ybnh.css';
import '../../css/i/ia9878bzv.css';
import '../../css/v/v0uimdbjt.css';
import '../../css/j/jmgi-wb9f.css';
import '../../css/m/mrtuohvsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c4m7y61rf wm-deco"/><path class="petj3ybnh wm-deco"/><path class="ia9878bzv wm-k"/><path class="v0uimdbjt wm-a"/><path class="jmgi-wb9f wm-k"/><path class="mrtuohvsz wm-a"/></g>`,
		"fallback": "withicons:rotate-ccw-blueprint",
	});
}

export default Component;
