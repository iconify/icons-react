import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm51gobgi.css';
import '../../css/t/tz-ovhbji.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm51gobgi"/><circle class="tz-ovhbji"/>`,
		"fallback": "garden:question-mark-fill-12",
	});
}

export default Component;
