import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/suws22yje.css';
import '../../css/h/hhk78obsx.css';
import '../../css/k/kfw9gf8gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="suws22yje"/><path class="hhk78obsx"/><path class="kfw9gf8gq"/></g>`,
		"fallback": "hugeicons:money-lock",
	});
}

export default Component;
