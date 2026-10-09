import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x13lcabyi.css';
import '../../css/o/oi3fybc0n.css';
import '../../css/w/w9t884b9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x13lcabyi"/><path class="oi3fybc0n"/><path class="w9t884b9p"/>`,
		"fallback": "energy-icons:repeat-48",
	});
}

export default Component;
