import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyitpi_su.css';
import '../../css/o/omdddcagb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fyitpi_su"/><path class="omdddcagb"/></g>`,
		"fallback": "solar:pie-chart-2-bold-duotone",
	});
}

export default Component;
