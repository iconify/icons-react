import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tok2xfb_t.css';
import '../../css/c/cp5kib_ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tok2xfb_t"/><path class="cp5kib_ch"/>`,
		"fallback": "lucide-extended:square-arrow-right-exit-filled",
	});
}

export default Component;
