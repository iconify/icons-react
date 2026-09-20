import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/t/tk_-6uodd.css';
import '../../css/z/ziw92bpia.css';
import '../../css/v/vg56ky4ro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="tk_-6uodd"/><path class="ziw92bpia"/><path class="vg56ky4ro"/></g>`,
		"fallback": "streamline-kameleon-color:pounds-coin-duo",
	});
}

export default Component;
