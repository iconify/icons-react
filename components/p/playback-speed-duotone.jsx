import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvktdgbql.css';
import '../../css/f/flpvl3bhd.css';
import '../../css/j/jbzkjmbbh.css';
import '../../css/v/v1zp_fbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvktdgbql"/><path class="flpvl3bhd"/><path class="jbzkjmbbh"/><path class="v1zp_fbha"/></g>`,
		"fallback": "reicon:playback-speed-duotone",
	});
}

export default Component;
