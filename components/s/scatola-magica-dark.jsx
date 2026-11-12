import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfdf4mgjs.css';
import '../../css/d/dbhc3c9og.css';
import '../../css/x/x8izqachk.css';
import '../../css/v/vx4rklble.css';
import '../../css/d/dp94l_bay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfdf4mgjs"/><path class="dbhc3c9og"/><path class="x8izqachk"/><path class="vx4rklble"/><path class="dp94l_bay"/>`,
		"fallback": "selfhst:scatola-magica-dark",
	});
}

export default Component;
