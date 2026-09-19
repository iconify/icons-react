import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54kc8x7l.css';
import '../../css/z/zyn_ifbxm.css';
import '../../css/h/hhybubb0v.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 f54kc8x7l"/><path class="clr-i-outline clr-i-outline-path-2 zyn_ifbxm"/><path class="clr-i-outline clr-i-outline-path-3 hhybubb0v"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:language-line",
	});
}

export default Component;
