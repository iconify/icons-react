import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fmeovypeb.css';
import '../../css/k/kjeii5b8e.css';
import '../../css/l/lrd4lfbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fmeovypeb"/><path class="kjeii5b8e"/><path class="lrd4lfbqv"/></g>`,
		"fallback": "hugeicons:qwen",
	});
}

export default Component;
