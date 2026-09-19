import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyzc8pbog.css';
import '../../css/d/dnz3b-bwt.css';
import '../../css/p/pf732lbkc.css';
import '../../css/d/dby6fccod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyzc8pbog"/><path class="dnz3b-bwt"/><path class="pf732lbkc"/><path class="dby6fccod"/>`,
		"fallback": "gcp:transfer-appliance",
	});
}

export default Component;
