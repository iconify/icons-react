import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r82ygfb2l.css';
import '../../css/u/uc85edb9x.css';
import '../../css/h/hyek6xbfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r82ygfb2l"/><path class="uc85edb9x"/><path class="hyek6xbfu"/></g>`,
		"fallback": "streamline-plump-color:recycle-bin-3-flat",
	});
}

export default Component;
