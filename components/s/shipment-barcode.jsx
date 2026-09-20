import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d__nz5trr.css';
import '../../css/r/r8amcz75y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d__nz5trr"/><path class="r8amcz75y"/></g>`,
		"fallback": "streamline-ultimate:shipment-barcode",
	});
}

export default Component;
