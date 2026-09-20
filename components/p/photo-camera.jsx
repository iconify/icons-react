import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/th5axtmsv.css';
import '../../css/g/g92xhmwfq.css';
import '../../css/w/wwqbv96-k.css';
import '../../css/w/we-12w5hp.css';
import '../../css/i/iwkpw8e6p.css';
import '../../css/z/zxutsmbxy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="th5axtmsv"/><path class="g92xhmwfq"/><path class="wwqbv96-k"/><path class="we-12w5hp"/><path class="iwkpw8e6p"/><path class="zxutsmbxy"/></g>`,
		"fallback": "streamline-flex-color:photo-camera",
	});
}

export default Component;
