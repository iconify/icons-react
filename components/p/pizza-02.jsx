import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wwim7wbwn.css';
import '../../css/e/eay7wabqi.css';
import '../../css/x/xj1eo1kcv.css';
import '../../css/s/snk52kbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wwim7wbwn"/><path class="eay7wabqi"/><path class="xj1eo1kcv"/><path class="snk52kbzr"/></g>`,
		"fallback": "hugeicons:pizza-02",
	});
}

export default Component;
