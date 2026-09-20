import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfjgvi1zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bfjgvi1zl"/>`,
		"fallback": "streamline-logos:sina-weibo-logo-block",
	});
}

export default Component;
