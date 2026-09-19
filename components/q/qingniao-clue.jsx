import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr__sggoa.css';
import '../../css/g/gzdw0ebuw.css';
import '../../css/s/ss6jc7vij.css';
import '../../css/g/gwrvddb1c.css';
import '../../css/q/qxwd_tu9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pr__sggoa"/><path clip-rule="evenodd" class="gzdw0ebuw"/><path clip-rule="evenodd" class="ss6jc7vij"/><path class="gwrvddb1c"/><path clip-rule="evenodd" class="qxwd_tu9m"/></g>`,
		"fallback": "icon-park-outline:qingniao-clue",
	});
}

export default Component;
