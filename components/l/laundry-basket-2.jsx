import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xom3pbcmw.css';
import '../../css/f/fjofboqhb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xom3pbcmw"/><path class="fjofboqhb"/></g>`,
		"fallback": "marketeq:laundry-basket-2",
	});
}

export default Component;
