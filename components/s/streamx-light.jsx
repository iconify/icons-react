import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zde4xzqjy.css';
import '../../css/g/g6-r16bmg.css';
import '../../css/c/cly6unwwo.css';
import '../../css/y/y92rshbew.css';
import '../../css/c/cnr_t4rmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zde4xzqjy"/><path class="g6-r16bmg"/><path class="cly6unwwo"/><path class="y92rshbew"/><path class="cnr_t4rmh"/>`,
		"fallback": "selfhst:streamx-light",
	});
}

export default Component;
