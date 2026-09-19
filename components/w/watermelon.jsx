import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/alx19_r_t.css';
import '../../css/s/sewd1ccmo.css';
import '../../css/f/f3thebb2v.css';
import '../../css/l/lz2098e2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="alx19_r_t"/><path class="sewd1ccmo"/><path class="f3thebb2v"/><path class="lz2098e2z"/></g>`,
		"fallback": "icon-park:watermelon",
	});
}

export default Component;
