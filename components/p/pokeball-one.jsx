import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yash702mt.css';
import '../../css/c/ch5cypb2m.css';
import '../../css/f/fwvm8vsks.css';
import '../../css/a/a3sssbc_k.css';
import '../../css/p/povs420wf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yash702mt"/><circle class="ch5cypb2m"/><path class="fwvm8vsks"/><path class="a3sssbc_k"/><circle class="povs420wf"/></g>`,
		"fallback": "icon-park:pokeball-one",
	});
}

export default Component;
