import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry2mczbpi.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b ry2mczbpi"/><path class="b bwibdw4bb"/>`,
		"fallback": "boxicons:pencil-circle",
	});
}

export default Component;
