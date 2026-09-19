import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wq43hzbih.css';
import '../../css/h/hjhzq3jzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wq43hzbih"/><path class="hjhzq3jzu"/></g>`,
		"fallback": "icon-park-outline:refraction",
	});
}

export default Component;
