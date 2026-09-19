import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sn_sho-8s.css';
import '../../css/c/cluotnboz.css';
import '../../css/l/lh3vwkbco.css';

const viewBox = {"width":41,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sn_sho-8s"/><path class="cluotnboz"/><path class="lh3vwkbco"/></g>`,
		"fallback": "et:map",
	});
}

export default Component;
