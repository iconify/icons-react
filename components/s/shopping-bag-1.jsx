import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/ec4hlybbx.css';
import '../../css/k/k_p1vh_pm.css';
import '../../css/d/djbc6-y5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ec4hlybbx"/><path class="k_p1vh_pm"/><path class="djbc6-y5j"/></g>`,
		"fallback": "streamline-cyber:shopping-bag-1",
	});
}

export default Component;
