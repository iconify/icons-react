import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_5qiye1h.css';
import '../../css/a/a54gp9nlm.css';
import '../../css/v/vnu5z5b4t.css';
import '../../css/q/q6n9uhf1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_5qiye1h"/><path class="a54gp9nlm"/><path class="vnu5z5b4t"/><path class="q6n9uhf1q"/></g>`,
		"fallback": "streamline-ultimate-color:launch-go",
	});
}

export default Component;
