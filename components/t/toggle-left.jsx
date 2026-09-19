import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u07f9fclq.css';
import '../../css/y/yitct_buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="u07f9fclq"/><circle class="yitct_buo"/></g>`,
		"fallback": "feather:toggle-left",
	});
}

export default Component;
