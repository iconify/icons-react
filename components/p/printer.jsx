import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8abz9scu.css';
import '../../css/f/fvu5o2blx.css';
import '../../css/n/na6gedbkw.css';
import '../../css/a/ahklu1bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8abz9scu"/><path class="fvu5o2blx"/><path class="na6gedbkw"/><path class="ahklu1bar"/></g>`,
		"fallback": "andrsrxn:printer",
	});
}

export default Component;
