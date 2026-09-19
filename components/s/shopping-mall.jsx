import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8pk6r70x.css';
import '../../css/p/pq-3x51-i.css';
import '../../css/g/gs98bbbdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y8pk6r70x"/><path class="pq-3x51-i"/><path class="gs98bbbdv"/></g>`,
		"fallback": "icon-park-solid:shopping-mall",
	});
}

export default Component;
