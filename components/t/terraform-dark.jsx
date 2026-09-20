import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/t/twdsh1b5k.css';
import '../../css/i/iz89bvbzi.css';
import '../../css/k/ki54dl-uc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="twdsh1b5k"/><path clip-rule="evenodd" class="iz89bvbzi"/><path clip-rule="evenodd" class="ki54dl-uc"/></g>`,
		"fallback": "skill-icons:terraform-dark",
	});
}

export default Component;
