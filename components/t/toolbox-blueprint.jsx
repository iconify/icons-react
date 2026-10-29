import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hiakk2yzj.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/p/puikbyp4x.css';
import '../../css/v/v6yzk-b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hiakk2yzj wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="puikbyp4x wm-k"/><path class="v6yzk-b5c wm-a"/></g>`,
		"fallback": "withicons:toolbox-blueprint",
	});
}

export default Component;
