import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3os1xhir.css';
import '../../css/d/d6d0x4b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3os1xhir"/><path class="d6d0x4b4m"/>`,
		"fallback": "streamline-ultimate:temperature-thermometer-high-bold",
	});
}

export default Component;
