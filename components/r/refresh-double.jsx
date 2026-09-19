import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pao9cab5l.css';
import '../../css/n/nbo5_vccv.css';
import '../../css/r/rhfhlozer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pao9cab5l"/><path class="nbo5_vccv"/><path class="rhfhlozer"/></g>`,
		"fallback": "iconoir:refresh-double",
	});
}

export default Component;
