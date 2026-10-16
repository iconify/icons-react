import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1tj-6k9k.css';
import '../../css/k/kid2eibph.css';
import '../../css/n/n9b7sac4s.css';
import '../../css/r/r99qjyjuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g1tj-6k9k"/><path class="kid2eibph"/><path class="n9b7sac4s"/><path class="r99qjyjuz"/></g>`,
		"fallback": "andrsrxn:rocking-horse",
	});
}

export default Component;
