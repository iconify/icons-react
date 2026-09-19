import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqmmxtbol.css';
import '../../css/w/w95mvmj8u.css';
import '../../css/r/roz1z-bss.css';
import '../../css/c/czh-er49n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qqmmxtbol"/><path class="w95mvmj8u"/><path class="roz1z-bss"/><circle class="czh-er49n"/></g>`,
		"fallback": "icon-park-outline:shrimp",
	});
}

export default Component;
