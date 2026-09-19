import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/a/af-emcr9h.css';
import '../../css/x/xxag6prjz.css';
import '../../css/h/hfnzkub-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="af-emcr9h"/><path class="xxag6prjz"/><path class="hfnzkub-p"/></g>`,
		"fallback": "icon-park-outline:tickets-checked",
	});
}

export default Component;
