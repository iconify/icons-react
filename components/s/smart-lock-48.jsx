import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg3h39b1g.css';
import '../../css/a/ah-ntwbee.css';
import '../../css/z/zi1nuachi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg3h39b1g"/><path class="ah-ntwbee"/><path class="zi1nuachi"/>`,
		"fallback": "energy-icons:smart-lock-48",
	});
}

export default Component;
