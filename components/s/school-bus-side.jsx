import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q975urp9a.css';
import '../../css/x/xvglmac6q.css';
import '../../css/a/azix8qb6k.css';
import '../../css/q/qrmgg4bfs.css';
import '../../css/i/inmdk1bna.css';
import '../../css/a/a5lqa051s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q975urp9a"/><path clip-rule="evenodd" class="xvglmac6q"/><path class="azix8qb6k"/><path class="qrmgg4bfs"/><path class="inmdk1bna"/><path class="a5lqa051s"/></g>`,
		"fallback": "streamline-color:school-bus-side",
	});
}

export default Component;
