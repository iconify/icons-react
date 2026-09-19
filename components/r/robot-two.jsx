import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z4gla85ro.css';
import '../../css/d/d6rjz8b6d.css';
import '../../css/k/kmzp8bb_p.css';
import '../../css/t/tewkg6wrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="z4gla85ro"/><path class="d6rjz8b6d"/><circle class="kmzp8bb_p"/><path class="tewkg6wrh"/></g>`,
		"fallback": "icon-park-solid:robot-two",
	});
}

export default Component;
