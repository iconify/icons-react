import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smaug663i.css';
import '../../css/x/xkees3b5w.css';
import '../../css/l/l-16bmb_h.css';
import '../../css/l/lz06rnbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="smaug663i"/><path class="xkees3b5w"/><path class="l-16bmb_h"/><path class="lz06rnbuu"/></g>`,
		"fallback": "reicon:palette-duotone",
	});
}

export default Component;
