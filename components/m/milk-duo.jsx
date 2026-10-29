import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/drvjwaboq.css';
import '../../css/n/neusriboq.css';
import '../../css/n/nhm3kcoqx.css';
import '../../css/o/ovzt3sbip.css';
import '../../css/u/uf07sqbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="drvjwaboq"/><path class="neusriboq wm-a"/><path class="nhm3kcoqx"/><path class="ovzt3sbip"/><path class="uf07sqbew wm-a"/></g>`,
		"fallback": "withicons:milk-duo",
	});
}

export default Component;
