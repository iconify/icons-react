import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xgfrcogqu.css';
import '../../css/j/jixhl9msz.css';
import '../../css/n/nh05mtbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xgfrcogqu"/><path class="jixhl9msz"/><path class="nh05mtbfu"/></g>`,
		"fallback": "hugeicons:payment-02",
	});
}

export default Component;
