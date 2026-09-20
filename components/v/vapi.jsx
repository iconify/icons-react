import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7_0qw30p.css';
import '../../css/i/i7_w7zo5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="e7_0qw30p"/><path class="i7_w7zo5m"/></g>`,
		"fallback": "thesvg-color:vapi",
	});
}

export default Component;
