import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/etba-6bny.css';
import '../../css/r/r_k86acet.css';
import '../../css/o/o-geo2jre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="etba-6bny"/><path class="r_k86acet"/><path class="o-geo2jre"/></g>`,
		"fallback": "hugeicons:message-favourite-02",
	});
}

export default Component;
