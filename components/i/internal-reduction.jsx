import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e0pazubmt.css';
import '../../css/s/si5nizbso.css';
import '../../css/y/ypj-nwmud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e0pazubmt"/><path clip-rule="evenodd" class="si5nizbso"/><path class="ypj-nwmud"/></g>`,
		"fallback": "icon-park-outline:internal-reduction",
	});
}

export default Component;
