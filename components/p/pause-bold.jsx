import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj208xbck.css';
import '../../css/t/takxuugoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj208xbck"/><path class="takxuugoc"/>`,
		"fallback": "solar:pause-bold",
	});
}

export default Component;
