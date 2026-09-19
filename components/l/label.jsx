import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o8s2cpv2k.css';
import '../../css/f/fdqrqdr-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o8s2cpv2k"/><path class="fdqrqdr-y"/></g>`,
		"fallback": "icon-park-outline:label",
	});
}

export default Component;
