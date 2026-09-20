import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3ggk_8xs.css';
import '../../css/k/kmyfn0x9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w3ggk_8xs"/><path class="kmyfn0x9t"/></g>`,
		"fallback": "streamline-ultimate:music-on-off-1",
	});
}

export default Component;
