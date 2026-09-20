import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdasxcb6b.css';
import '../../css/m/mfwbafjts.css';
import '../../css/e/enivjqk_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdasxcb6b"/><path class="mfwbafjts"/><path class="enivjqk_s"/>`,
		"fallback": "streamline-freehand:text-formating-rotate-vertical",
	});
}

export default Component;
