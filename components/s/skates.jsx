import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e6b2l1b0w.css';
import '../../css/j/jzj6tdhdx.css';
import '../../css/c/c_zwkzr4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e6b2l1b0w"/><path class="jzj6tdhdx"/><path class="c_zwkzr4c"/></g>`,
		"fallback": "icon-park-solid:skates",
	});
}

export default Component;
