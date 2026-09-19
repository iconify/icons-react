import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/hq5j0kbho.css';
import '../../css/l/l4amttbih.css';
import '../../css/i/iug4c3bzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="hq5j0kbho"/><circle class="l4amttbih"/><path class="iug4c3bzv"/></g>`,
		"fallback": "icon-park-solid:setting-computer",
	});
}

export default Component;
