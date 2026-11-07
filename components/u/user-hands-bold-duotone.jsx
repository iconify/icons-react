import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp66iosrg.css';
import '../../css/e/efszygbcr.css';
import '../../css/j/j855t9sbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp66iosrg"/><path class="efszygbcr"/><path class="j855t9sbc"/>`,
		"fallback": "solar:user-hands-bold-duotone",
	});
}

export default Component;
