import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1gs-6bun.css';
import '../../css/l/laly92dep.css';
import '../../css/o/ojebk8beo.css';
import '../../css/g/gowh172ju.css';
import '../../css/o/o5wlcpbou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1gs-6bun"/><path class="laly92dep"/><path clip-rule="evenodd" class="ojebk8beo"/><path class="gowh172ju"/><path class="o5wlcpbou"/></g>`,
		"fallback": "streamline-flex-color:printer",
	});
}

export default Component;
