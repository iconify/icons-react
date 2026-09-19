import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tu4qdd9vm.css';
import '../../css/l/lnotn3pcn.css';
import '../../css/r/r-m4ambab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="tu4qdd9vm"/><path class="lnotn3pcn"/><circle class="r-m4ambab"/></g>`,
		"fallback": "icon-park-solid:sleep-two",
	});
}

export default Component;
