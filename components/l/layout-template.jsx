import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qa27x5b5v.css';
import '../../css/l/lfl8g1bjv.css';
import '../../css/x/xpmt8p_bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="qa27x5b5v"/><rect class="lfl8g1bjv"/><rect class="xpmt8p_bt"/></g>`,
		"fallback": "lucide:layout-template",
	});
}

export default Component;
