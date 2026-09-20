import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzk874b3t.css';
import '../../css/j/j0nnx5bfb.css';
import '../../css/c/cp5bj9b5e.css';
import '../../css/k/k_26gp1en.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzk874b3t"/><path class="j0nnx5bfb"/><path class="cp5bj9b5e"/><path class="k_26gp1en"/>`,
		"fallback": "selfhst:transfer-zip-light",
	});
}

export default Component;
