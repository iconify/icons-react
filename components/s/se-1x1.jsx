import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwq_awb_v.css';
import '../../css/i/isfqmkfad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwq_awb_v"/><path class="isfqmkfad"/>`,
		"fallback": "flag:se-1x1",
	});
}

export default Component;
