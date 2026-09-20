import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzqjjovso.css';
import '../../css/y/y0cjw3bqi.css';
import '../../css/t/t7qj1p26i.css';
import '../../css/g/gde_5z6-n.css';
import '../../css/i/ip4eisuir.css';
import '../../css/s/s7ki4jsup.css';
import '../../css/d/dtxrw5bco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzqjjovso"/><path class="y0cjw3bqi"/><path class="t7qj1p26i"/><path class="gde_5z6-n"/><path class="ip4eisuir"/><path class="s7ki4jsup"/><path class="dtxrw5bco"/>`,
		"fallback": "selfhst:markstack",
	});
}

export default Component;
