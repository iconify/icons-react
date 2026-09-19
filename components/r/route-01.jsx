import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugw1omula.css';
import '../../css/t/tke4h5b0x.css';
import '../../css/n/nksj0vbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ugw1omula"/><circle class="tke4h5b0x"/><path class="nksj0vbih"/></g>`,
		"fallback": "hugeicons:route-01",
	});
}

export default Component;
