import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6k2ncbcg.css';
import '../../css/a/aemftobud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6k2ncbcg"/><path class="aemftobud"/>`,
		"fallback": "energy-icons:power-bank-48",
	});
}

export default Component;
