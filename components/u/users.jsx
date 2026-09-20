import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pcyfrjbuz.css';
import '../../css/p/poeibnbcs.css';
import '../../css/a/a2caqccpk.css';
import '../../css/q/qg8wpjbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pcyfrjbuz"/><path class="poeibnbcs"/><path clip-rule="evenodd" class="a2caqccpk"/><path class="qg8wpjbhw"/></g>`,
		"fallback": "reicon:users",
	});
}

export default Component;
