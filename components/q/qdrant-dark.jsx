import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cua72wbew.css';
import '../../css/x/xltwp_47m.css';
import '../../css/k/klo26abzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cua72wbew"/><path class="xltwp_47m"/><path class="klo26abzy"/>`,
		"fallback": "selfhst:qdrant-dark",
	});
}

export default Component;
