import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpq_q-boq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpq_q-boq"/>`,
		"fallback": "f7:resize",
	});
}

export default Component;
