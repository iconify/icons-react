import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv65oib5o.css';
import '../../css/n/n7ab-r98n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv65oib5o"/><path class="n7ab-r98n"/>`,
		"fallback": "nimbus:qr-code",
	});
}

export default Component;
