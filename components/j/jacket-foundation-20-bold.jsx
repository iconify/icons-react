import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3yza3f3o.css';
import '../../css/x/xob25hbzw.css';
import '../../css/v/v-8c-izvt.css';
import '../../css/d/d34tcbbnr.css';
import '../../css/r/r6sg57v8j.css';
import '../../css/p/pzjoa-bjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3yza3f3o"/><path class="xob25hbzw"/><path class="v-8c-izvt"/><path class="d34tcbbnr"/><path class="r6sg57v8j"/><path class="pzjoa-bjg"/>`,
		"fallback": "energy-icons:jacket-foundation-20-bold",
	});
}

export default Component;
