import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkt9d2bgn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkt9d2bgn"/>`,
		"fallback": "game-icons:primitive-torch",
	});
}

export default Component;
