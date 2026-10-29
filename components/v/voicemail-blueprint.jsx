import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gpuvf8bwr.css';
import '../../css/o/o-tsjlamj.css';
import '../../css/m/m9avzl1wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gpuvf8bwr wm-deco"/><path class="o-tsjlamj wm-deco"/><path class="m9avzl1wk"/></g>`,
		"fallback": "withicons:voicemail-blueprint",
	});
}

export default Component;
