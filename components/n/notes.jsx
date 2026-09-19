import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2_vkljg.css';
import '../../css/t/tubczkbmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae2_vkljg"/><path class="tubczkbmv"/>`,
		"fallback": "cil:notes",
	});
}

export default Component;
