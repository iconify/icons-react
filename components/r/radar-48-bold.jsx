import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/d/dtf397bse.css';
import '../../css/g/gum8p4fdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="dtf397bse"/><path class="gum8p4fdo"/>`,
		"fallback": "energy-icons:radar-48-bold",
	});
}

export default Component;
