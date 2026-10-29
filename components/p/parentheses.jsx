import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyi0qdb7p.css';
import '../../css/b/b0t6qjswe.css';
import '../../css/q/q6m2x4bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyi0qdb7p wm-k"/><path class="b0t6qjswe wm-k"/><path class="q6m2x4bqi wm-k"/></g>`,
		"fallback": "withicons-anime:parentheses",
	});
}

export default Component;
