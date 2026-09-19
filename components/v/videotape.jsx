import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xlntljo_b.css';
import '../../css/y/y58k7bb-w.css';
import '../../css/c/cke3tihzk.css';
import '../../css/v/vs4rimaky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xlntljo_b"/><circle class="y58k7bb-w"/><circle class="cke3tihzk"/><path class="vs4rimaky"/></g>`,
		"fallback": "hugeicons:videotape",
	});
}

export default Component;
