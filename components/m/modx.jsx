import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p54kkm0ui.css';
import '../../css/w/wm8g5-men.css';
import '../../css/t/t0q45t93f.css';
import '../../css/x/xszsoj8ri.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p54kkm0ui"/><path class="modx-original-st2 wm8g5-men"/><path class="modx-original-st3 t0q45t93f"/><path class="modx-original-st4 xszsoj8ri"/>`,
		"fallback": "devicon:modx",
	});
}

export default Component;
