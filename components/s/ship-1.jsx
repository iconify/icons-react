import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7g6_3buu.css';
import '../../css/g/g-6_fbosi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7g6_3buu"/><path class="g-6_fbosi"/>`,
		"fallback": "lineicons:ship-1",
	});
}

export default Component;
