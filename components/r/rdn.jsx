import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjbu-u61o.css';
import '../../css/r/rv9qnabgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="wjbu-u61o"/><path class="rv9qnabgv"/></g>`,
		"fallback": "cryptocurrency-color:rdn",
	});
}

export default Component;
