import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brf4rlr5x.css';
import '../../css/n/nd0pwk2rn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brf4rlr5x"/><path class="nd0pwk2rn"/>`,
		"fallback": "energy-icons:kerbside-charger-48-bold",
	});
}

export default Component;
