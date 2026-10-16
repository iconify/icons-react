import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/k/k855t2b2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="k855t2b2s"/>`,
		"fallback": "energy-icons:price-cap-48",
	});
}

export default Component;
