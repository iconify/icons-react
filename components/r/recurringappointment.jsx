import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv55mnb9w.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv55mnb9w"/>`,
		"fallback": "wpf:recurringappointment",
	});
}

export default Component;
