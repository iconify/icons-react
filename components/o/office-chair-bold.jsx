import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0p9_yb_k.css';
import '../../css/b/bu9ktetle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0p9_yb_k"/><path class="bu9ktetle"/>`,
		"fallback": "streamline-ultimate:office-chair-bold",
	});
}

export default Component;
