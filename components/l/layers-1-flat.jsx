import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnopx-bph.css';
import '../../css/j/j8p6ujtpx.css';
import '../../css/k/knmiz-ibv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnopx-bph"/><path class="j8p6ujtpx"/><path class="knmiz-ibv"/></g>`,
		"fallback": "streamline-plump-color:layers-1-flat",
	});
}

export default Component;
