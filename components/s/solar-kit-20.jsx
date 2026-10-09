import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqlaqcc4h.css';
import '../../css/p/pb5d0bbik.css';
import '../../css/z/zq7fmrmeu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqlaqcc4h"/><path class="pb5d0bbik"/><path class="zq7fmrmeu"/>`,
		"fallback": "energy-icons:solar-kit-20",
	});
}

export default Component;
