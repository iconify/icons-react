import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rdpygh3qj.css';
import '../../css/y/y3c69sbrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="rdpygh3qj"/><path class="y3c69sbrh"/></g>`,
		"fallback": "icon-park-outline:shuffle-one",
	});
}

export default Component;
