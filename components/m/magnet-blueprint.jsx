import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r8szkwwde.css';
import '../../css/a/ag6daps-l.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jura4nbok.css';
import '../../css/f/fcpcu9i2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="r8szkwwde wm-deco"/><path class="ag6daps-l wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jura4nbok wm-k"/><path class="fcpcu9i2b wm-a"/></g>`,
		"fallback": "withicons:magnet-blueprint",
	});
}

export default Component;
