import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqcocqe4n.css';
import '../../css/b/b_juddsas.css';
import '../../css/k/kuyyylbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lqcocqe4n"/><path class="b_juddsas"/><path class="kuyyylbud"/></g>`,
		"fallback": "streamline-ultimate:shipment-touch",
	});
}

export default Component;
