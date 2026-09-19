import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/r/ri_106bdd.css';
import '../../css/b/b6w1e6bkw.css';
import '../../css/t/te0_flb6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="ri_106bdd"/><path class="b6w1e6bkw"/><path class="te0_flb6z"/></g>`,
		"fallback": "icon-park:mitsubishi",
	});
}

export default Component;
