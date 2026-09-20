import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvcd6chfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvcd6chfn"/>`,
		"fallback": "si:pause-line",
	});
}

export default Component;
