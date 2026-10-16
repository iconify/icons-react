import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp02g-bms.css';
import '../../css/t/t_7qy9b-e.css';
import '../../css/r/rviy4nhfj.css';
import '../../css/a/a9jgigbhm.css';
import '../../css/s/sttuocbmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp02g-bms"/><path class="t_7qy9b-e"/><path class="rviy4nhfj"/><path class="a9jgigbhm"/><path class="sttuocbmy"/>`,
		"fallback": "energy-icons:minibus-48",
	});
}

export default Component;
