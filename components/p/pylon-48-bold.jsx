import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9x5rac2h.css';
import '../../css/o/o63gs7ffv.css';
import '../../css/n/ne8de7own.css';
import '../../css/h/hfvtdh7cx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9x5rac2h"/><path class="o63gs7ffv"/><path class="ne8de7own"/><path class="hfvtdh7cx"/>`,
		"fallback": "energy-icons:pylon-48-bold",
	});
}

export default Component;
