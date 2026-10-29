import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/z/zyz3b3hwn.css';
import '../../css/c/cgu-kccmc.css';
import '../../css/i/i_jo63g9s.css';
import '../../css/y/yci3bbcwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="zyz3b3hwn"/><path class="cgu-kccmc"/><path class="i_jo63g9s wm-shine"/><path class="wm-deco yci3bbcwq"/></g>`,
		"fallback": "withicons-sticker:message-square-code",
	});
}

export default Component;
