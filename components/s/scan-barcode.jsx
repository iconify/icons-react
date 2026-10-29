import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a9vkqabok.css';
import '../../css/r/r4509t42k.css';
import '../../css/r/rx9r0vbxb.css';
import '../../css/t/t39s8lpzq.css';
import '../../css/p/pz-uhdfmz.css';
import '../../css/m/mygk1wb5u.css';
import '../../css/m/m8clgqebj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a9vkqabok wm-shadow"/><path class="r4509t42k"/><path class="rx9r0vbxb"/><path class="t39s8lpzq"/><path class="pz-uhdfmz"/><path class="mygk1wb5u"/><path class="m8clgqebj wm-deco"/></g>`,
		"fallback": "withicons-sticker:scan-barcode",
	});
}

export default Component;
