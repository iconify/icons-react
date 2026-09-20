import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/rbm2gcr7d.css';
import '../../css/y/y_l1qv8bi.css';
import '../../css/l/lfzysgjlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="rbm2gcr7d"/><path class="y_l1qv8bi"/><path class="lfzysgjlv"/></g>`,
		"fallback": "streamline-sharp-color:phone-setting",
	});
}

export default Component;
