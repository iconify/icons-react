import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acx2yyb8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="acx2yyb8n"/>`,
		"fallback": "streamline-plump:login-1-solid",
	});
}

export default Component;
