import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ah34vx61k.css';
import '../../css/u/uxs6sac8y.css';
import '../../css/i/ielwengza.css';
import '../../css/z/zhtgx2bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ah34vx61k wm-k"/><path class="uxs6sac8y wm-k"/><path class="ielwengza wm-k"/><path class="wm-a zhtgx2bwa"/></g>`,
		"fallback": "withicons:network-sketch",
	});
}

export default Component;
