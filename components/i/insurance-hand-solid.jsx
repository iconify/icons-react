import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb69ufv_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qb69ufv_n"/>`,
		"fallback": "streamline-plump:insurance-hand-solid",
	});
}

export default Component;
