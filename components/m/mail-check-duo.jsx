import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9g84w8dg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7v0zjbzo.css';
import '../../css/a/aivyodbgw.css';
import '../../css/t/tth5h6bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9g84w8dg secondary"/><g class="dt0cm9dhy primary"><path class="v7v0zjbzo"/><path class="aivyodbgw"/><path class="tth5h6bax"/></g>`,
		"fallback": "iconaut:mail-check-duo",
	});
}

export default Component;
