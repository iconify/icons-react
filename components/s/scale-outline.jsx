import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3r5fw2r.css';
import '../../css/i/i_d2xgsxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="lq3r5fw2r"/><path class="i_d2xgsxg"/>`,
		"fallback": "ion:scale-outline",
	});
}

export default Component;
