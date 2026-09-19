import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xh09az3_x.css';
import '../../css/i/iz9z3bilq.css';
import '../../css/m/m6xeubc1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xh09az3_x"/><path class="iz9z3bilq"/><path class="m6xeubc1w"/></g>`,
		"fallback": "icon-park-outline:invalid-files",
	});
}

export default Component;
