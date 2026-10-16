import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoecip_zs.css';
import '../../css/u/u-2khd52i.css';
import '../../css/v/vysp5-ryk.css';
import '../../css/o/oheu1iy3h.css';
import '../../css/t/tspxr7b8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoecip_zs"/><path class="u-2khd52i"/><path class="vysp5-ryk"/><path class="oheu1iy3h"/><path class="tspxr7b8c"/>`,
		"fallback": "energy-icons:statcom-20-bold",
	});
}

export default Component;
