import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peoarebot.css';
import '../../css/n/n0urq0a3z.css';
import '../../css/f/fch6rrymb.css';
import '../../css/o/ox6y2ub3r.css';
import '../../css/b/bas8edbgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peoarebot"/><path class="n0urq0a3z"/><path class="fch6rrymb"/><path class="ox6y2ub3r"/><path class="bas8edbgq"/>`,
		"fallback": "energy-icons:level-crossing-20",
	});
}

export default Component;
