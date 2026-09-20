import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb_5mrzpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb_5mrzpq"/>`,
		"fallback": "selfhst:salt",
	});
}

export default Component;
