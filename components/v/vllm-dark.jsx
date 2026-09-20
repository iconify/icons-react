import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7-mx-psp.css';
import '../../css/w/wgujkib2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7-mx-psp"/><path class="wgujkib2m"/>`,
		"fallback": "selfhst:vllm-dark",
	});
}

export default Component;
