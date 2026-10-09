import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxp23q9lf.css';
import '../../css/k/krkae6dal.css';
import '../../css/k/k86basb3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxp23q9lf"/><path class="krkae6dal"/><path class="k86basb3d"/>`,
		"fallback": "energy-icons:phone-call-48",
	});
}

export default Component;
