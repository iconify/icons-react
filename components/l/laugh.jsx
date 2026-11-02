import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g06brfbzv.css';
import '../../css/e/eixurmbtn.css';
import '../../css/t/tlorxuo8d.css';
import '../../css/s/st-rf3p9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="g06brfbzv"/><path class="eixurmbtn"/><path class="tlorxuo8d"/><path class="st-rf3p9d"/></g>`,
		"fallback": "matita:laugh",
	});
}

export default Component;
