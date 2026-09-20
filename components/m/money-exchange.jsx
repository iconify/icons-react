import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ed3y3zbpp.css';
import '../../css/k/ktoaqbajk.css';
import '../../css/f/fcaoa701q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ed3y3zbpp"/><path class="ktoaqbajk"/><path class="fcaoa701q"/></g>`,
		"fallback": "mage:money-exchange",
	});
}

export default Component;
