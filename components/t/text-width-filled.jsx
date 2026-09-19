import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5bw_15rv.css';
import '../../css/u/ud4vqp_ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5bw_15rv"/><path class="ud4vqp_ls"/>`,
		"fallback": "boxicons:text-width-filled",
	});
}

export default Component;
