import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hzw61jb_z.css';
import '../../css/y/y3y6spbtc.css';
import '../../css/f/fv0_nacyl.css';
import '../../css/e/eklnfjwlt.css';
import '../../css/z/z2_44uplp.css';
import '../../css/q/qwbh14bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hzw61jb_z wm-shadow"/><path class="y3y6spbtc"/><path class="fv0_nacyl"/><path class="eklnfjwlt"/><path class="wm-shine z2_44uplp"/><path class="qwbh14bjt wm-deco"/></g>`,
		"fallback": "withicons-sticker:tooth",
	});
}

export default Component;
