import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oueekoeob.css';
import '../../css/b/bcezkgbtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="oueekoeob"/><path class="bcezkgbtf"/></g>`,
		"fallback": "cryptocurrency-color:sushi",
	});
}

export default Component;
