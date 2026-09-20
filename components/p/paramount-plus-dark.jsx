import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txjhcum_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txjhcum_q"/>`,
		"fallback": "selfhst:paramount-plus-dark",
	});
}

export default Component;
