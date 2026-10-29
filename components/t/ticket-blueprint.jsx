import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ex8lrup2k.css';
import '../../css/r/rhnsbwb-m.css';
import '../../css/n/nwncmym7l.css';
import '../../css/l/lntbq-b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ex8lrup2k wm-deco"/><path class="rhnsbwb-m wm-deco"/><path class="nwncmym7l"/><path class="lntbq-b3k"/></g>`,
		"fallback": "withicons:ticket-blueprint",
	});
}

export default Component;
