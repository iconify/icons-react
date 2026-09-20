import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-74qt9ow.css';
import '../../css/z/zzhnkz4tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m-74qt9ow"/><path class="zzhnkz4tf"/></g>`,
		"fallback": "lucide:trending-up",
	});
}

export default Component;
