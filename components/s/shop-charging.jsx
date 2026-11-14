import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjxr1tb3o.css';
import '../../css/u/uq1ukubtf.css';
import '../../css/q/q_niwi8da.css';
import '../../css/g/gq3zsabvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jjxr1tb3o"/><path class="uq1ukubtf"/><path class="q_niwi8da"/><path class="gq3zsabvc"/></g>`,
		"fallback": "evicons:shop-charging",
	});
}

export default Component;
