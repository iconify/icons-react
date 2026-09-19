import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl3j48bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl3j48bgd"/>`,
		"fallback": "heroicons:user",
	});
}

export default Component;
