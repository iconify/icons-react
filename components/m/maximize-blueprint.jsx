import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/go1md04ik.css';
import '../../css/b/bxjv56brc.css';
import '../../css/k/kbr-34uax.css';
import '../../css/q/q9crmh73i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="go1md04ik wm-deco"/><path class="bxjv56brc wm-deco"/><path class="kbr-34uax"/><path class="q9crmh73i"/></g>`,
		"fallback": "withicons:maximize-blueprint",
	});
}

export default Component;
