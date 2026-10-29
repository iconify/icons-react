import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xow0zcb0r.css';
import '../../css/t/t32tg997g.css';
import '../../css/k/ku6q6_xui.css';
import '../../css/u/uwldxv39u.css';
import '../../css/l/lqllpubnn.css';
import '../../css/e/ecxhesbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xow0zcb0r"/><path class="t32tg997g wm-deco"/><path class="ku6q6_xui wm-deco"/><path class="uwldxv39u wm-k"/><path class="lqllpubnn wm-s"/><path class="ecxhesbwt wm-k"/></g>`,
		"fallback": "withicons:user-x-blueprint",
	});
}

export default Component;
