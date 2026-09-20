import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi-ue2tqy.css';
import '../../css/m/mo_rg4g7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi-ue2tqy"/><path class="mo_rg4g7t"/>`,
		"fallback": "token:prq",
	});
}

export default Component;
