import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeus0db9e.css';
import '../../css/p/pdce8ibzc.css';
import '../../css/a/aw440ebhl.css';
import '../../css/r/rmf12nbde.css';
import '../../css/w/w91xigg0g.css';
import '../../css/w/woe89gs6v.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/ursmw36db.css';
import '../../css/n/no9kwwm_v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeus0db9e"/><path class="pdce8ibzc"/><path class="aw440ebhl"/><path class="rmf12nbde"/><path class="w91xigg0g"/><path class="woe89gs6v"/><g class="jn8qy4bru"><path class="ursmw36db"/><path class="no9kwwm_v"/></g>`,
		"fallback": "openmoji:water-pistol",
	});
}

export default Component;
