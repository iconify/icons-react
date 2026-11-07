import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj208xbck.css';
import '../../css/g/gz18a5efe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj208xbck"/><path class="gz18a5efe"/>`,
		"fallback": "solar:pause-bold-duotone",
	});
}

export default Component;
