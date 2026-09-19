import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/afz-hbc2x.css';
import '../../css/d/dfuqjjkyx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="afz-hbc2x"/><path class="dfuqjjkyx"/></g>`,
		"fallback": "icon-park-solid:swing",
	});
}

export default Component;
