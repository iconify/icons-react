import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lpaon527v.css';
import '../../css/n/n39qrntti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="lpaon527v"/><rect class="n39qrntti"/></g>`,
		"fallback": "icon-park-solid:screenshot-one",
	});
}

export default Component;
