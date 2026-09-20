import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b66k_dq-g.css';
import '../../css/k/k-jty3jzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b66k_dq-g"/><path clip-rule="evenodd" class="k-jty3jzx"/>`,
		"fallback": "lets-icons:server-fill",
	});
}

export default Component;
