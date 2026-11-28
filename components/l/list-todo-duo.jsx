import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk41hkb_g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nerq2brpd.css';
import '../../css/a/afuu0c5kl.css';
import '../../css/s/syl86zr3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zk41hkb_g"/><g class="dt0cm9dhy primary"><path class="nerq2brpd"/><path class="afuu0c5kl"/><path class="syl86zr3b"/></g>`,
		"fallback": "iconaut:list-todo-duo",
	});
}

export default Component;
