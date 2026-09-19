import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/ficxir45h.css';
import '../../css/m/mp_bmdbno.css';
import '../../css/e/eb16u3ipa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ficxir45h"/><path class="mp_bmdbno"/><path class="eb16u3ipa"/></g>`,
		"fallback": "icon-park:laptop",
	});
}

export default Component;
