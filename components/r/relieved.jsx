import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7269db2g.css';
import '../../css/l/lmrf6zs5l.css';
import '../../css/b/bs0zlccnk.css';
import '../../css/q/q7i633bxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7269db2g"/><path class="lmrf6zs5l"/><path class="bs0zlccnk"/><path class="q7i633bxh"/>`,
		"fallback": "fxemoji:relieved",
	});
}

export default Component;
