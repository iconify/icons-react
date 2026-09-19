import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z-3dhhb_i.css';
import '../../css/h/hmvldzbaf.css';
import '../../css/t/tewkg6wrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="z-3dhhb_i"/><circle class="hmvldzbaf"/><path class="tewkg6wrh"/></g>`,
		"fallback": "icon-park-outline:robot-two",
	});
}

export default Component;
