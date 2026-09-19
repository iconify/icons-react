import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2yon6bqv.css';
import '../../css/b/bad9hsb7u.css';
import '../../css/m/m2pqkwfao.css';
import '../../css/f/fduciibru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2yon6bqv"/><path class="bad9hsb7u"/><path class="m2pqkwfao"/><circle transform="matrix(0 -1 -1 0 10 14)" class="fduciibru"/><circle transform="matrix(0 -1 -1 0 16 14)" class="fduciibru"/></g>`,
		"fallback": "icon-park-outline:source-code",
	});
}

export default Component;
