import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch_tinmug.css';
import '../../css/e/ejhz2c5ze.css';
import '../../css/i/irheceavw.css';
import '../../css/z/z-byh2wlf.css';
import '../../css/r/rlocaobos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ch_tinmug"/><path class="ejhz2c5ze"/><circle class="irheceavw"/><circle class="z-byh2wlf"/><path class="rlocaobos"/></g>`,
		"fallback": "icon-park-outline:koala-bear",
	});
}

export default Component;
