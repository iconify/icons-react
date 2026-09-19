import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/dyaf68bbe.css';
import '../../css/z/zk794xbdr.css';
import '../../css/s/suau6bcmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="dyaf68bbe"/><circle class="zk794xbdr"/><path class="suau6bcmm"/></g>`,
		"fallback": "icon-park-solid:rocket-one",
	});
}

export default Component;
