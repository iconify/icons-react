import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q812q6b2h.css';
import '../../css/e/ewr58kbsd.css';
import '../../css/f/fm1fuhbkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q812q6b2h"/><path class="ewr58kbsd"/><path class="fm1fuhbkg"/></g>`,
		"fallback": "icon-park-outline:signal-one",
	});
}

export default Component;
