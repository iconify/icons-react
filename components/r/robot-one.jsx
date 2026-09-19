import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn3yljbjm.css';
import '../../css/i/i6uv60y3t.css';
import '../../css/u/u0zyu677r.css';
import '../../css/b/bybf8xbik.css';
import '../../css/b/bzwukfgni.css';
import '../../css/v/va3jbbcyp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="cn3yljbjm"/><circle class="i6uv60y3t"/><circle class="u0zyu677r"/><path class="bybf8xbik"/><path class="bzwukfgni"/><circle class="va3jbbcyp"/></g>`,
		"fallback": "icon-park-outline:robot-one",
	});
}

export default Component;
