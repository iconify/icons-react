import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euynafocq.css';
import '../../css/z/zwgax5b6y.css';
import '../../css/a/abf5ubrqq.css';
import '../../css/q/qzm1q-b2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euynafocq"/><path class="zwgax5b6y"/><path class="abf5ubrqq"/><path class="qzm1q-b2s"/>`,
		"fallback": "energy-icons:town-hall-20",
	});
}

export default Component;
