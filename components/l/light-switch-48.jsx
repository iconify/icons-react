import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-wxdblp.css';
import '../../css/t/tqdfodbmv.css';
import '../../css/p/p8s_xtbie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-wxdblp"/><path class="tqdfodbmv"/><path class="p8s_xtbie"/>`,
		"fallback": "energy-icons:light-switch-48",
	});
}

export default Component;
