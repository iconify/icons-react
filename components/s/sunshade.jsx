import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qmmnpqd0d.css';
import '../../css/k/kej97abdp.css';
import '../../css/c/cmqybvbeu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qmmnpqd0d"/><path class="kej97abdp"/><path class="cmqybvbeu"/></g>`,
		"fallback": "icon-park-outline:sunshade",
	});
}

export default Component;
