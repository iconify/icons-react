import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgj0ydbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgj0ydbcg"/>`,
		"fallback": "si:settings-cute-fill",
	});
}

export default Component;
