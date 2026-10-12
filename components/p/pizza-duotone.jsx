import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym2y-0zlv.css';
import '../../css/c/cbbn8ybds.css';
import '../../css/p/pn-9x0dbt.css';
import '../../css/p/pll8__bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ym2y-0zlv"/><path class="cbbn8ybds"/><path class="pn-9x0dbt"/><path class="pll8__bet"/></g>`,
		"fallback": "lucide-extended:pizza-duotone",
	});
}

export default Component;
