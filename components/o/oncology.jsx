import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1vrwcaop.css';
import '../../css/b/bt9ybibdw.css';
import '../../css/h/h0_dwo2xe.css';
import '../../css/o/oi4pzjbhc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1vrwcaop"/><path class="bt9ybibdw"/><path class="h0_dwo2xe"/><path class="oi4pzjbhc"/>`,
		"fallback": "medical-icon:oncology",
	});
}

export default Component;
