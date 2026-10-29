import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ezgbeof7j.css';
import '../../css/e/e7kshwb3h.css';
import '../../css/n/nqbqjtbuq.css';
import '../../css/x/xbs1z5b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ezgbeof7j wm-k"/><path class="e7kshwb3h wm-a"/><path class="nqbqjtbuq"/><path class="xbs1z5b9g"/></g>`,
		"fallback": "withicons-bauhaus:text-search",
	});
}

export default Component;
