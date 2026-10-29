import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rdnh--bxy.css';
import '../../css/b/bdtp4fpvl.css';
import '../../css/i/iazg7jbxc.css';
import '../../css/x/xbecp_bdv.css';
import '../../css/h/h-8noya1n.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rdnh--bxy wm-shadow"/><path class="bdtp4fpvl"/><path class="iazg7jbxc"/><path class="xbecp_bdv"/><path class="h-8noya1n wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:plane",
	});
}

export default Component;
