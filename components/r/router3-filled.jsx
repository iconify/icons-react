import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yil1v_65z.css';
import '../../css/a/a6in9ff6w.css';
import '../../css/r/rpg611bjx.css';
import '../../css/x/xopp2ebdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yil1v_65z"/><path class="a6in9ff6w"/><path class="rpg611bjx"/><path clip-rule="evenodd" class="xopp2ebdp"/></g>`,
		"fallback": "reicon:router3-filled",
	});
}

export default Component;
