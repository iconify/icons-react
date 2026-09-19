import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j3e3dd6zq.css';
import '../../css/r/rbj55nd1k.css';
import '../../css/a/a-a-hhclv.css';
import '../../css/x/x-l1wm5up.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="j3e3dd6zq"/><path class="rbj55nd1k"/><path class="a-a-hhclv"/><path class="x-l1wm5up"/></g>`,
		"fallback": "icon-park:link-one",
	});
}

export default Component;
