import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vkig2-b7i.css';
import '../../css/g/gkmld7b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vkig2-b7i"/><path class="gkmld7b-f"/></g>`,
		"fallback": "hugeicons:warehouse",
	});
}

export default Component;
