import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db2xgugay.css';
import '../../css/g/gi2xlrbzn.css';
import '../../css/m/mlt9_nbpk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db2xgugay"/><path class="gi2xlrbzn"/><path class="mlt9_nbpk"/>`,
		"fallback": "selfhst:radarr-anime",
	});
}

export default Component;
