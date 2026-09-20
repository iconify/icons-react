import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncl9vbbiy.css';
import '../../css/q/qs0advbke.css';
import '../../css/a/abav96znq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ncl9vbbiy"/><path class="qs0advbke"/><path class="abav96znq"/></g>`,
		"fallback": "streamline-plump-color:ladder-flat",
	});
}

export default Component;
