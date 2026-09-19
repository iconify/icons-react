import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj10p5rzw.css';
import '../../css/w/wuaul2ctt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj10p5rzw"/><path class="wuaul2ctt"/>`,
		"fallback": "ep:turn-off",
	});
}

export default Component;
