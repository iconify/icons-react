import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9izw7byz.css';
import '../../css/f/fnma71b8m.css';
import '../../css/l/lk0djsbta.css';
import '../../css/q/qdgtb3b3t.css';
import '../../css/g/gucrvybvm.css';
import '../../css/t/t960wyh7q.css';
import '../../css/s/sdaufvb9g.css';
import '../../css/d/dz5n3eunt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9izw7byz"/><path class="fnma71b8m"/><path class="lk0djsbta"/><path class="qdgtb3b3t"/><path class="gucrvybvm"/><path class="t960wyh7q"/><path class="sdaufvb9g"/><path class="dz5n3eunt"/></g>`,
		"fallback": "icon-park-solid:lens-alignment",
	});
}

export default Component;
