import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z7dq4587f.css';
import '../../css/a/at5cfwz_m.css';
import '../../css/v/vn_agwb7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="z7dq4587f"/><path class="at5cfwz_m"/><path class="vn_agwb7j"/></g>`,
		"fallback": "icon-park-solid:message-security",
	});
}

export default Component;
