import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s35baj69w.css';
import '../../css/x/xcy1aj_aa.css';
import '../../css/q/q_pr2wbay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s35baj69w"/><path class="xcy1aj_aa"/><path class="q_pr2wbay"/>`,
		"fallback": "streamline-pixel:money-payments-calculator-app",
	});
}

export default Component;
