import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e0pazubmt.css';
import '../../css/w/wn5rh4bnl.css';
import '../../css/w/w19wwz2kz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e0pazubmt"/><path clip-rule="evenodd" class="wn5rh4bnl"/><path class="w19wwz2kz"/></g>`,
		"fallback": "icon-park-solid:internal-expansion",
	});
}

export default Component;
