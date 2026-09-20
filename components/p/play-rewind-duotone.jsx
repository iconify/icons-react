import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7kd-cczz.css';
import '../../css/l/lvinadbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7kd-cczz"/><path class="lvinadbtn"/>`,
		"fallback": "si:play-rewind-duotone",
	});
}

export default Component;
