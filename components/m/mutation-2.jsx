import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6rrh3byv.css';
import '../../css/q/qfiyzsrnv.css';
import '../../css/v/vhiyc9brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f6rrh3byv"/><path class="qfiyzsrnv"/><path class="vhiyc9brz"/></g>`,
		"fallback": "covid:mutation-2",
	});
}

export default Component;
