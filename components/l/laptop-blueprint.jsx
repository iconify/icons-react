import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/ll9oracgz.css';
import '../../css/d/dqytk5brb.css';
import '../../css/g/gmyf6120p.css';
import '../../css/s/s9_882qzo.css';
import '../../css/g/gi6gjccot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ll9oracgz wm-deco"/><path class="dqytk5brb wm-deco"/><path class="gmyf6120p wm-k"/><path class="s9_882qzo wm-a"/><path class="gi6gjccot wm-a"/></g>`,
		"fallback": "withicons:laptop-blueprint",
	});
}

export default Component;
