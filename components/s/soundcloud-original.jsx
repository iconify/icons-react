import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxo1zg92k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxo1zg92k"/>`,
		"fallback": "lineicons:soundcloud-original",
	});
}

export default Component;
