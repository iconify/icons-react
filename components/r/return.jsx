import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ugj513b_d.css';
import '../../css/v/v7yst0b9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ugj513b_d"/><path class="v7yst0b9e"/></g>`,
		"fallback": "icon-park:return",
	});
}

export default Component;
