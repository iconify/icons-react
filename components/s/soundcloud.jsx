import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6oms2bmw.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6oms2bmw"/>`,
		"fallback": "fa:soundcloud",
	});
}

export default Component;
