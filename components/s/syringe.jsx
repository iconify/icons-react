import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2p7kgczh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2p7kgczh"/>`,
		"fallback": "lineicons:syringe",
	});
}

export default Component;
