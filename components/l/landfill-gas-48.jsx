import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn313-bdo.css';
import '../../css/c/cw3ksvblq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn313-bdo"/><path class="cw3ksvblq"/>`,
		"fallback": "energy-icons:landfill-gas-48",
	});
}

export default Component;
