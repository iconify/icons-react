import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr-ksnhfb.css';
import '../../css/n/nqaiq_lnn.css';
import '../../css/u/uvs2kogds.css';
import '../../css/a/ad6qe92ab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mr-ksnhfb"/><circle class="nqaiq_lnn"/><circle class="uvs2kogds"/><path class="ad6qe92ab"/>`,
		"fallback": "fxemoji:thoughtbaloon",
	});
}

export default Component;
