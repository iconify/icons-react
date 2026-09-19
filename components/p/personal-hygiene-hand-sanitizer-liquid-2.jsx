import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlim-4b5l.css';
import '../../css/b/bx9kiqocv.css';
import '../../css/l/lkp8d_bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hlim-4b5l"/><path class="bx9kiqocv"/><path class="lkp8d_bfq"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-liquid-2",
	});
}

export default Component;
