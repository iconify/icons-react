import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsp5zr9ng.css';
import '../../css/b/bbjq83b2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsp5zr9ng"/><path class="bbjq83b2n"/>`,
		"fallback": "selfhst:mailpit",
	});
}

export default Component;
