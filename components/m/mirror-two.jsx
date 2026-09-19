import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/so14_5mmm.css';
import '../../css/b/bvszfhbhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="so14_5mmm"/><path class="bvszfhbhc"/></g>`,
		"fallback": "icon-park-solid:mirror-two",
	});
}

export default Component;
