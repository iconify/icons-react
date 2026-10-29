import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tbwg8yj8j.css';
import '../../css/l/lhfk1jb7g.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/o/oxp2msbkr.css';
import '../../css/z/z93dh598w.css';
import '../../css/d/ds34yo22m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tbwg8yj8j wm-deco"/><path class="lhfk1jb7g wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="oxp2msbkr wm-k"/><path class="wm-a z93dh598w"/><path class="ds34yo22m wm-k"/></g>`,
		"fallback": "withicons:toilet-blueprint",
	});
}

export default Component;
