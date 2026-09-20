import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehpyr2bhb.css';
import '../../css/d/d0za96bnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ehpyr2bhb"/><path class="d0za96bnn"/>`,
		"fallback": "token:oath",
	});
}

export default Component;
