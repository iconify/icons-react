import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beaf8k8ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beaf8k8ky"/>`,
		"fallback": "streamline-ultimate:smiley-happy-bold",
	});
}

export default Component;
