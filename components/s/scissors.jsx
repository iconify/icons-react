import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xo4-_ebwm.css';
import '../../css/i/iq7t8w77f.css';
import '../../css/j/jov0wrbte.css';
import '../../css/r/r-_v6zbze.css';
import '../../css/q/qx0y49bnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xo4-_ebwm"/><path class="iq7t8w77f"/><path class="jov0wrbte"/><circle class="r-_v6zbze"/><circle class="qx0y49bnk"/></g>`,
		"fallback": "icon-park:scissors",
	});
}

export default Component;
