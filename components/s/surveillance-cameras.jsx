import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xib2qv12u.css';
import '../../css/r/r_69r9b3c.css';
import '../../css/h/hbfbrwbos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xib2qv12u"/><path class="r_69r9b3c"/><path class="hbfbrwbos"/></g>`,
		"fallback": "icon-park-solid:surveillance-cameras",
	});
}

export default Component;
