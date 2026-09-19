import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d70npacrz.css';
import '../../css/l/l8-q0ccsa.css';
import '../../css/k/k-3466b-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d70npacrz"/><path class="l8-q0ccsa"/><path class="k-3466b-a"/></g>`,
		"fallback": "icon-park-outline:map-road-two",
	});
}

export default Component;
