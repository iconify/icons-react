import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkyfhubwr.css';
import '../../css/z/zyz94_b1d.css';
import '../../css/k/ksibtyk_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkyfhubwr"/><path class="zyz94_b1d"/><path class="ksibtyk_f"/>`,
		"fallback": "solar:ruler-pen-bold",
	});
}

export default Component;
