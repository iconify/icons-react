import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/et3i3ja-x.css';
import '../../css/z/zo2e37brb.css';
import '../../css/z/z2-tajbun.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="et3i3ja-x"/><path class="zo2e37brb"/><path class="z2-tajbun"/></g>`,
		"fallback": "icon-park:seedling",
	});
}

export default Component;
