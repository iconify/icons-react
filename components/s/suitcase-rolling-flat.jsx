import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4rcjllvc.css';
import '../../css/a/at6ugtb4z.css';
import '../../css/w/w0u2m3b8v.css';
import '../../css/d/dylnbb19p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4rcjllvc"/><path class="at6ugtb4z"/><path class="w0u2m3b8v"/><path clip-rule="evenodd" class="dylnbb19p"/></g>`,
		"fallback": "streamline-plump-color:suitcase-rolling-flat",
	});
}

export default Component;
