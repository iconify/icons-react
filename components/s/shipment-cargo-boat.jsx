import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h1unfjbib.css';
import '../../css/z/zpk-3obhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h1unfjbib"/><path class="zpk-3obhj"/></g>`,
		"fallback": "streamline-ultimate:shipment-cargo-boat",
	});
}

export default Component;
