import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rthtgrrbd.css';
import '../../css/l/l-i-cfbtp.css';
import '../../css/c/c5c5h6dcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rthtgrrbd"/><path class="l-i-cfbtp"/><path class="c5c5h6dcw"/>`,
		"fallback": "energy-icons:table-48",
	});
}

export default Component;
