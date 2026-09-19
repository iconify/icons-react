import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjn5kuzfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjn5kuzfw"/>`,
		"fallback": "boxicons:piano-grand",
	});
}

export default Component;
