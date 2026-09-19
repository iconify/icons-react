import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l-khs-b9m.css';
import '../../css/s/sstindttr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l-khs-b9m"/><path class="sstindttr"/></g>`,
		"fallback": "icon-park-solid:two-dimensional-code-two",
	});
}

export default Component;
