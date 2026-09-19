import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b45qcxb6d.css';
import '../../css/j/jy0oc5btf.css';
import '../../css/q/q1k0-_tav.css';
import '../../css/k/km4mtgblm.css';
import '../../css/q/qy9y8jbcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b45qcxb6d"/><path class="jy0oc5btf"/><path class="q1k0-_tav"/><path class="km4mtgblm"/><path class="qy9y8jbcs"/></g>`,
		"fallback": "icon-park:play-basketball",
	});
}

export default Component;
