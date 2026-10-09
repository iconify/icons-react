import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2q88dbhf.css';
import '../../css/p/pqo_b9orr.css';
import '../../css/u/ut7qkuuts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2q88dbhf"/><path class="pqo_b9orr"/><path class="ut7qkuuts"/>`,
		"fallback": "energy-icons:warehouse-48",
	});
}

export default Component;
