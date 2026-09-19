import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eruy9gp0e.css';
import '../../css/n/ndj3kilnh.css';
import '../../css/w/wph00ybsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eruy9gp0e"/><path class="ndj3kilnh"/><path class="wph00ybsf"/></g>`,
		"fallback": "icon-park-outline:maximum",
	});
}

export default Component;
