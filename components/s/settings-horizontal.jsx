import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/x/x0k02nrul.css';
import '../../css/t/tukm5qb8s.css';
import '../../css/i/ifs-v5bqs.css';
import '../../css/m/m9nrudbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="x0k02nrul"/><circle class="tukm5qb8s"/><circle class="ifs-v5bqs"/><circle class="m9nrudbxy"/></g>`,
		"fallback": "akar-icons:settings-horizontal",
	});
}

export default Component;
