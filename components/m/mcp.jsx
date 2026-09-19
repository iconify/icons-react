import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leig0z_lw.css';
import '../../css/u/uitb-4b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leig0z_lw"/><path class="uitb-4b_d"/>`,
		"fallback": "bxl:mcp",
	});
}

export default Component;
