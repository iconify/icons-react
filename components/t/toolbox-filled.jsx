import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlj9jxb_e.css';
import '../../css/o/owo49jf1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlj9jxb_e"/><path clip-rule="evenodd" class="owo49jf1r"/>`,
		"fallback": "lucide-extended:toolbox-filled",
	});
}

export default Component;
