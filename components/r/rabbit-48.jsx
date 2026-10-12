import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhg_0dbbc.css';
import '../../css/p/pjqal2h2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhg_0dbbc"/><path class="pjqal2h2w"/>`,
		"fallback": "energy-icons:rabbit-48",
	});
}

export default Component;
