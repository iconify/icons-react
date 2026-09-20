import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckgm-9y5r.css';
import '../../css/v/v_xa8ibqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ckgm-9y5r"/><path class="v_xa8ibqk"/>`,
		"fallback": "streamline-freehand:programming-code-idea",
	});
}

export default Component;
