import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqm0zqpjw.css';
import '../../css/r/rzso0ac9x.css';
import '../../css/f/fj-sjk2rc.css';
import '../../css/i/ixk_98bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qqm0zqpjw"/><path class="rzso0ac9x"/><path class="fj-sjk2rc"/><path class="ixk_98bub"/></g>`,
		"fallback": "lucide-extended:pen-tool-duotone",
	});
}

export default Component;
