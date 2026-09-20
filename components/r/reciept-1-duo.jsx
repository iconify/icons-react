import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zikajmxqo.css';
import '../../css/f/fgf5h_bco.css';
import '../../css/r/ruo2lvbss.css';
import '../../css/s/stveu4pdn.css';
import '../../css/s/shzs8mb1f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zikajmxqo"><path class="fgf5h_bco"/><path class="ruo2lvbss"/><path class="stveu4pdn"/><path class="shzs8mb1f"/></g>`,
		"fallback": "streamline-stickies-color:reciept-1-duo",
	});
}

export default Component;
