import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3p1ybc1b.css';
import '../../css/u/u3mwlbnay.css';
import '../../css/d/dfs353agi.css';
import '../../css/n/nn9-ygbxl.css';
import '../../css/i/ib3dwix3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e3p1ybc1b"><path class="u3mwlbnay"/><path class="dfs353agi"/><path class="nn9-ygbxl"/><path class="ib3dwix3e"/></g>`,
		"fallback": "icon-park:target-two",
	});
}

export default Component;
