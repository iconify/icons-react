import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o00t5vblz.css';
import '../../css/x/x6epjg-xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o00t5vblz"/><path class="x6epjg-xb"/></g>`,
		"fallback": "hugeicons:message-delay-02",
	});
}

export default Component;
