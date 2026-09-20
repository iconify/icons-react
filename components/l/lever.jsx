import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9t7j4b3h.css';
import '../../css/a/amr0dcbch.css';
import '../../css/a/az17gfbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9t7j4b3h"/><path class="amr0dcbch"/><path class="az17gfbpi"/>`,
		"fallback": "token:lever",
	});
}

export default Component;
