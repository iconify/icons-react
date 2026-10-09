import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sos5epbco.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sos5epbco"/>`,
		"fallback": "energy-icons:maximize-20",
	});
}

export default Component;
