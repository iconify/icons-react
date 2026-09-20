import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbzmt7bhp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbzmt7bhp"/>`,
		"fallback": "selfhst:klipper-dark",
	});
}

export default Component;
