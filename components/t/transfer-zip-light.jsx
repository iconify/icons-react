import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di4sswb8c.css';
import '../../css/i/igyalw_4q.css';
import '../../css/x/x7ghx-psb.css';
import '../../css/k/k_26gp1en.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di4sswb8c"/><path class="igyalw_4q"/><path class="x7ghx-psb"/><path class="k_26gp1en"/>`,
		"fallback": "selfhst:transfer-zip-light",
	});
}

export default Component;
