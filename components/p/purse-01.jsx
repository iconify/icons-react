import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bujqc9bzy.css';
import '../../css/o/oa9vxvzug.css';
import '../../css/o/olphuzb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bujqc9bzy"/><path class="oa9vxvzug"/><path class="olphuzb2n"/></g>`,
		"fallback": "hugeicons:purse-01",
	});
}

export default Component;
