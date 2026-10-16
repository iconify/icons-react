import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urx8x1bxz.css';
import '../../css/n/nlzn_o26i.css';
import '../../css/z/zdzbjuxfw.css';
import '../../css/e/e8_sa6eqg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urx8x1bxz"/><path class="nlzn_o26i"/><path class="zdzbjuxfw"/><path class="e8_sa6eqg"/>`,
		"fallback": "energy-icons:package-search-20-bold",
	});
}

export default Component;
