import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/br15_2bxe.css';
import '../../css/l/l00otmbzz.css';
import '../../css/c/cp6jlib5e.css';
import '../../css/j/j2c-0_buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="br15_2bxe wm-deco"/><path class="l00otmbzz wm-deco"/><path class="cp6jlib5e wm-k"/><path class="j2c-0_buh wm-a"/></g>`,
		"fallback": "withicons:microwave-blueprint",
	});
}

export default Component;
