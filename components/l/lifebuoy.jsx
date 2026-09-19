import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rywb7i7di.css';
import '../../css/b/b_kn-ebbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="rywb7i7di"/><path class="b_kn-ebbb"/></g>`,
		"fallback": "icon-park-outline:lifebuoy",
	});
}

export default Component;
