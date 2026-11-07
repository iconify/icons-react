import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dciv8jbgc.css';
import '../../css/h/hm0exmb8r.css';
import '../../css/p/pofhjrbui.css';
import '../../css/t/tmouilbdm.css';
import '../../css/w/w5d-t9y6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dciv8jbgc"/><path class="hm0exmb8r"/><path class="pofhjrbui"/><path class="tmouilbdm"/><path class="w5d-t9y6f"/>`,
		"fallback": "solar:radio-bold-duotone",
	});
}

export default Component;
