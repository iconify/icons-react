import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q-ve5obbe.css';
import '../../css/d/drvk3abpg.css';
import '../../css/s/sph-8wbvl.css';
import '../../css/q/qv2-1bbbc.css';
import '../../css/r/rzpvwy9gk.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q-ve5obbe wm-shadow"/><path class="drvk3abpg"/><path class="sph-8wbvl"/><path class="qv2-1bbbc"/><path class="rzpvwy9gk"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:voicemail",
	});
}

export default Component;
