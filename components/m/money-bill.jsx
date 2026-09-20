import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4mym1_0y.css';
import '../../css/l/ln6rcys8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4mym1_0y"/><path class="ln6rcys8n"/>`,
		"fallback": "prime:money-bill",
	});
}

export default Component;
