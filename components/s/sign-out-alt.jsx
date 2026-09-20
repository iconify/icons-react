import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkrt_z8cs.css';
import '../../css/k/kazlm8w_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkrt_z8cs"/><path class="kazlm8w_n"/>`,
		"fallback": "uim:sign-out-alt",
	});
}

export default Component;
