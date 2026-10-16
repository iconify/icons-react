import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsovfjb6d.css';
import '../../css/q/qvlvqac0m.css';
import '../../css/c/cxs00ob8q.css';
import '../../css/y/y2485_kyn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsovfjb6d"/><path class="qvlvqac0m"/><path class="cxs00ob8q"/><path class="y2485_kyn"/>`,
		"fallback": "energy-icons:soil-carbon-20",
	});
}

export default Component;
