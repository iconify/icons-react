import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tubkdq4xe.css';
import '../../css/c/c-5d9sbei.css';
import '../../css/u/u2q07cbcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tubkdq4xe"/><path class="c-5d9sbei"/><circle class="u2q07cbcb"/></g>`,
		"fallback": "icon-park:pigeon",
	});
}

export default Component;
