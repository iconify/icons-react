import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp02g-bms.css';
import '../../css/r/roowebboo.css';
import '../../css/r/rviy4nhfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp02g-bms"/><path class="roowebboo"/><path class="rviy4nhfj"/>`,
		"fallback": "energy-icons:van-48",
	});
}

export default Component;
