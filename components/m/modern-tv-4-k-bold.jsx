import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq50w1k7n.css';
import '../../css/k/ki6y78brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq50w1k7n"/><path class="ki6y78brp"/>`,
		"fallback": "streamline-ultimate:modern-tv-4-k-bold",
	});
}

export default Component;
