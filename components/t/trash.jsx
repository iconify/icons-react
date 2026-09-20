import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsyjwjddq.css';
import '../../css/c/ctr08lbas.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsyjwjddq"/><path class="ctr08lbas"/>`,
		"fallback": "iwwa:trash",
	});
}

export default Component;
