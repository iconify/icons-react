import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7269db2g.css';
import '../../css/l/lmrf6zs5l.css';
import '../../css/y/y1ig9vb1s.css';
import '../../css/s/s92dlccok.css';
import '../../css/p/pxpgiw7hy.css';
import '../../css/w/wegr_lbpd.css';
import '../../css/i/igopaeb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7269db2g"/><path class="lmrf6zs5l"/><path class="y1ig9vb1s"/><path class="s92dlccok"/><path class="pxpgiw7hy"/><path class="wegr_lbpd"/><path class="igopaeb6d"/>`,
		"fallback": "fxemoji:smiletongue",
	});
}

export default Component;
