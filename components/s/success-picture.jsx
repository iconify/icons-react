import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t937w3bcg.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/g/gfo-qw48e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t937w3bcg"/><path class="q6u6gfbgw"/><path class="gfo-qw48e"/></g>`,
		"fallback": "icon-park-outline:success-picture",
	});
}

export default Component;
