import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1wdsppyi.css';
import '../../css/a/ar_a-93jx.css';
import '../../css/g/gc4x3gbol.css';
import '../../css/t/tg1gd3b0q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p1wdsppyi"/><path class="ar_a-93jx"/><path clip-rule="evenodd" class="gc4x3gbol"/><path class="tg1gd3b0q"/></g>`,
		"fallback": "streamline-plump-color:keyboard-flat",
	});
}

export default Component;
