import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zoqhftbbw.css';
import '../../css/a/acw583wyd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="zoqhftbbw"/><path class="acw583wyd"/></g>`,
		"fallback": "icon-park-solid:notepad",
	});
}

export default Component;
