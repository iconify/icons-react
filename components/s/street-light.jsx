import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xgtstcblw.css';
import '../../css/z/zxllwrblm.css';
import '../../css/m/ms-hx8b4m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="xgtstcblw"/><path class="zxllwrblm"/><path class="ms-hx8b4m"/></g>`,
		"fallback": "glyphs-poly:street-light",
	});
}

export default Component;
