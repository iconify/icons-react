import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxqp-y1ap.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l62y4hg5y.css';
import '../../css/z/zyotwulsl.css';
import '../../css/f/fb-49ybaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxqp-y1ap secondary"/><g class="dt0cm9dhy primary"><path class="l62y4hg5y"/><path class="zyotwulsl"/><path class="fb-49ybaa"/></g>`,
		"fallback": "iconaut:money-bag-duo",
	});
}

export default Component;
