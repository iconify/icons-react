import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bth93hb1e.css';
import '../../css/h/hadtb8bnd.css';
import '../../css/e/e9z24efaj.css';
import '../../css/l/l-94ahb3r.css';
import '../../css/j/jcfnd3a4g.css';
import '../../css/b/b6lxflb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bth93hb1e"/><path class="hadtb8bnd"/><path class="e9z24efaj"/><path class="l-94ahb3r"/><path class="jcfnd3a4g"/><path class="b6lxflb_v"/></g>`,
		"fallback": "streamline-cyber-color:movie-camera-2",
	});
}

export default Component;
