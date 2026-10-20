import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdivbnogq.css';
import '../../css/j/jeeixzboo.css';
import '../../css/q/qwzw8ri_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdivbnogq"/><path class="jeeixzboo"/><path class="qwzw8ri_l"/>`,
		"fallback": "energy-icons:passkey-48",
	});
}

export default Component;
