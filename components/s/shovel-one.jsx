import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j6lt18b5y.css';
import '../../css/s/sv6uwwbpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="j6lt18b5y"/><path class="sv6uwwbpt"/></g>`,
		"fallback": "icon-park-outline:shovel-one",
	});
}

export default Component;
