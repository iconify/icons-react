import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7b7i40wv.css';
import '../../css/p/pdoqb-fef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="w7b7i40wv"/><path class="pdoqb-fef"/></g>`,
		"fallback": "icon-park-solid:reduce-user",
	});
}

export default Component;
