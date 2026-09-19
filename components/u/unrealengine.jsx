import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cn08i3b8i.css';
import '../../css/z/zxfkkwbnu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cn08i3b8i"/><path class="zxfkkwbnu"/></g>`,
		"fallback": "devicon:unrealengine",
	});
}

export default Component;
