import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8g7dpcvt.css';
import '../../css/b/bc7iqrblt.css';
import '../../css/r/ricrltbdm.css';
import '../../css/s/smd4b0njc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8g7dpcvt"/><path class="bc7iqrblt"/><path class="ricrltbdm"/><path class="smd4b0njc"/>`,
		"fallback": "energy-icons:vehicle-to-home-48",
	});
}

export default Component;
