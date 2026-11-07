import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj9upir-e.css';
import '../../css/y/yjxhxvben.css';
import '../../css/y/yz0ivnopn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj9upir-e"/><path class="yjxhxvben"/><path clip-rule="evenodd" class="yz0ivnopn"/>`,
		"fallback": "solar:star-ring-bold-duotone",
	});
}

export default Component;
