import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/r/r2b3htb0e.css';
import '../../css/f/fafaftbdf.css';
import '../../css/h/hedkh-yow.css';
import '../../css/i/insrjhfex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b08in11er"/><path class="r2b3htb0e"/><path class="fafaftbdf"/><path class="hedkh-yow"/><path class="insrjhfex"/></g>`,
		"fallback": "icon-park:round-caliper",
	});
}

export default Component;
