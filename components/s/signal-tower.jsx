import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d-vp9bclj.css';
import '../../css/o/o6mn8obuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d-vp9bclj"/><path class="o6mn8obuk"/></g>`,
		"fallback": "icon-park-outline:signal-tower",
	});
}

export default Component;
