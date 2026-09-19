import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo_iicc4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo_iicc4d"/>`,
		"fallback": "cib:visa",
	});
}

export default Component;
