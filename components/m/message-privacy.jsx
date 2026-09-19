import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z7dq4587f.css';
import '../../css/r/rcake0kfw.css';
import '../../css/x/x5d_g09_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="z7dq4587f"/><path class="rcake0kfw"/><path class="x5d_g09_z"/></g>`,
		"fallback": "icon-park-solid:message-privacy",
	});
}

export default Component;
