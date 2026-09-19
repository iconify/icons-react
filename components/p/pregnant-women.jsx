import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fp3c5nb-j.css';
import '../../css/b/bogyxub1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="fp3c5nb-j"/><path class="bogyxub1w"/></g>`,
		"fallback": "icon-park-outline:pregnant-women",
	});
}

export default Component;
