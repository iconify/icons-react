import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qplorzbzz.css';
import '../../css/f/f494clbor.css';
import '../../css/e/eiifqcw6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="qplorzbzz"/><path class="f494clbor"/><circle class="eiifqcw6w"/></g>`,
		"fallback": "icon-park-outline:shoulder-bag",
	});
}

export default Component;
