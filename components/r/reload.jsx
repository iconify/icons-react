import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/txfwrhien.css';
import '../../css/z/zew7e1b0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="txfwrhien"/><path class="zew7e1b0p"/></g>`,
		"fallback": "icon-park-outline:reload",
	});
}

export default Component;
