import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqqd4rxmm.css';
import '../../css/p/p2wvxfw0k.css';
import '../../css/t/txvc8yb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fqqd4rxmm"/><path class="p2wvxfw0k"/><path class="txvc8yb8p"/></g>`,
		"fallback": "streamline-ultimate:office-file-xls",
	});
}

export default Component;
