import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gfcp4waxz.css';
import '../../css/b/bj1fc_bvz.css';
import '../../css/t/tbwsu36gi.css';
import '../../css/q/qn7woobnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gfcp4waxz"/><path class="bj1fc_bvz"/><path class="tbwsu36gi"/><path class="qn7woobnv"/></g>`,
		"fallback": "streamline-sharp-color:roller",
	});
}

export default Component;
