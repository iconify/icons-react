import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrh_nu7ig.css';
import '../../css/l/lq82xlboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrh_nu7ig"/><path clip-rule="evenodd" class="lq82xlboc"/>`,
		"fallback": "mingcute:user-search-fill",
	});
}

export default Component;
