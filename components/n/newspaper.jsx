import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/plhjeib6b.css';
import '../../css/k/kyqyllb4r.css';
import '../../css/m/mi840rjsg.css';
import '../../css/i/i2gjcmbgo.css';
import '../../css/z/z_z2rwqqk.css';
import '../../css/g/gmwf64byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="plhjeib6b wm-shadow"/><path class="kyqyllb4r"/><path class="mi840rjsg"/><path class="i2gjcmbgo"/><path class="wm-shine z_z2rwqqk"/><path class="gmwf64byv wm-deco"/></g>`,
		"fallback": "withicons-sticker:newspaper",
	});
}

export default Component;
