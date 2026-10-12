import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb_f6kbki.css';
import '../../css/z/zb_q1oboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb_f6kbki"/><path class="zb_q1oboj"/>`,
		"fallback": "lucide-extended:touchpad-off-filled",
	});
}

export default Component;
