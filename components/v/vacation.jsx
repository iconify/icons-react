import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vjqi9gboy.css';
import '../../css/w/wrqafjrbc.css';
import '../../css/b/bun8441ri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vjqi9gboy"/><path class="wrqafjrbc"/><path class="bun8441ri"/></g>`,
		"fallback": "icon-park-solid:vacation",
	});
}

export default Component;
