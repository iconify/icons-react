import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8f9jxbbr.css';
import '../../css/l/lnrengbdk.css';
import '../../css/q/qyqyr9byk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="q8f9jxbbr"/><path class="lnrengbdk"/><rect class="qyqyr9byk"/></g>`,
		"fallback": "icon-park-outline:tv",
	});
}

export default Component;
