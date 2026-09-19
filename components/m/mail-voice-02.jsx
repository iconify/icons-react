import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ytue-4f0g.css';
import '../../css/b/b9ie63b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ytue-4f0g"/><path class="b9ie63b_b"/></g>`,
		"fallback": "hugeicons:mail-voice-02",
	});
}

export default Component;
