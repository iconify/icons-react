import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fur0vn4_a.css';
import '../../css/z/z7bl1d2sz.css';
import '../../css/z/zioqik1qx.css';
import '../../css/h/hdjk1bcol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fur0vn4_a"/><path class="z7bl1d2sz"/><path class="zioqik1qx"/><path class="hdjk1bcol"/></g>`,
		"fallback": "streamline-plump-color:mall",
	});
}

export default Component;
