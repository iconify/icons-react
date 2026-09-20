import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc3rm6i6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc3rm6i6m"/>`,
		"fallback": "meteor-icons:layout-minus",
	});
}

export default Component;
